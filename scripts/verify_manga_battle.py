#!/usr/bin/env python3
"""E2E verification for Living Manga Page 5-shot Battle Arena (390x844 mobile & 1440x900 desktop)."""
import os
import socket
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

from playwright.sync_api import sync_playwright

APP_ROOT = Path(__file__).resolve().parent.parent
ARTIFACT_DIR = Path(r'D:\AntiGravity_Workspace\.gemini_data\antigravity\brain\f05187d3-5656-489f-99bb-ef819bd199d0')
SHOTS = ['vs_split', 'eye_cutin', 'finisher_splash', 'clash_shoulder', 'victory_cover']


def verify_modular_line_ceiling() -> None:
    over = []
    for p in (APP_ROOT / 'src').rglob('*'):
        if p.suffix in ('.ts', '.tsx', '.css'):
            n = len(p.read_text(encoding='utf-8').splitlines())
            if n > 400:
                over.append(f'{p.relative_to(APP_ROOT)}:{n}')
    assert not over, f'Files over 400-line ceiling: {over}'
    print('MODULAR_LINE_LIMIT_OK=True (all src files <= 400 lines)')


def find_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        return int(s.getsockname()[1])


def wait_for_server(url: str, timeout: float = 25.0) -> None:
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            with urllib.request.urlopen(url, timeout=2) as resp:
                if resp.status == 200:
                    return
        except Exception:
            time.sleep(0.3)
    raise RuntimeError(f'Timed out waiting for Vite server at {url}')


def verify_viewport(page, label: str, width: int, height: int, capture_mobile_shots: bool = False) -> None:
    page.set_viewport_size({'width': width, 'height': height})
    page.wait_for_timeout(200)

    metrics = page.evaluate("""() => {
      const root = document.documentElement;
      const screen = document.querySelector('[data-testid="comic-battle-screen"]');
      const stage = document.querySelector('[data-testid="manga-page-stage"]');
      const sBox = screen ? screen.getBoundingClientRect() : null;
      const stBox = stage ? stage.getBoundingClientRect() : null;
      return {
        docScrollH: root.scrollHeight,
        docClientH: root.clientHeight,
        docScrollW: root.scrollWidth,
        docClientW: root.clientWidth,
        screenScrollH: screen ? screen.scrollHeight : -1,
        screenClientH: screen ? screen.clientHeight : -1,
        stageRatio: (sBox && stBox && sBox.height > 0) ? +(stBox.height / sBox.height).toFixed(3) : 0,
      };
    }""")
    print(f'[{label}] metrics={metrics}')
    assert metrics['docScrollH'] <= metrics['docClientH'] + 1, f"{label} vertical overflow: {metrics}"
    assert metrics['docScrollW'] <= metrics['docClientW'] + 1, f"{label} horizontal overflow: {metrics}"
    assert metrics['screenScrollH'] <= metrics['screenClientH'] + 1, f"{label} battle scroll overflow: {metrics}"
    assert metrics['stageRatio'] >= 0.68, f"{label} manga-page-stage ratio too small: {metrics['stageRatio']}"

    for shot in SHOTS:
        page.get_by_test_id(f'btn-cam-{shot}').click()
        page.wait_for_function("""(expectedShot) => {
          const st = document.querySelector('[data-testid="manga-page-stage"]');
          if (!st || st.getAttribute('data-camera-shot') !== expectedShot) return false;
          const imgs = Array.from(st.querySelectorAll('img'));
          return imgs.length >= 2 && imgs.every(im => im.complete && im.naturalWidth > 0);
        }""", arg=shot, timeout=6000)
        page.wait_for_timeout(240)
        actual_shot = page.get_by_test_id('manga-page-stage').get_attribute('data-camera-shot')
        assert actual_shot == shot, f"{label} expected shot {shot}, got {actual_shot}"

        img_report = page.evaluate("""() => {
          const imgs = Array.from(document.querySelectorAll('[data-testid="manga-page-stage"] img'));
          return imgs.map(im => ({
            src: im.getAttribute('src') || '',
            complete: im.complete,
            naturalWidth: im.naturalWidth,
            transform: getComputedStyle(im).transform
          }));
        }""")
        assert len(img_report) >= 2, f"{label} shot {shot} expected >=2 imgs, got {len(img_report)}"
        for im in img_report:
            assert im['complete'] and im['naturalWidth'] > 0, f"{label} shot {shot} broken img: {im}"
            if 'mecha_lion' in im['src'] or 'hesman' in im['src']:
                assert not im['transform'].startswith('matrix(-1'), f"Hesman flipped horizontally: {im}"

        if capture_mobile_shots and shot in ('vs_split', 'eye_cutin', 'finisher_splash'):
            shot_file = ARTIFACT_DIR / f'manga_mobile_{shot}.png'
            page.screenshot(path=str(shot_file))
            print(f'SCREENSHOT={shot_file}')

    page.get_by_test_id('btn-cam-auto').click()
    page.wait_for_timeout(150)


def main() -> int:
    verify_modular_line_ceiling()
    port = find_free_port()
    url = f'http://127.0.0.1:{port}/'
    proc = subprocess.Popen(
        ['npm.cmd', 'run', 'dev', '--', '--port', str(port), '--strictPort'],
        cwd=str(APP_ROOT),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    try:
        wait_for_server(url)
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(viewport={'width': 390, 'height': 844})
            page = context.new_page()
            console_errors = []
            page.on('pageerror', lambda err: console_errors.append(str(err)))
            page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

            page.goto(url, wait_until='networkidle')
            page.get_by_test_id('portal-battle_arena').click()
            page.get_by_test_id('manga-page-stage').wait_for(state='visible')

            verify_viewport(page, 'mobile_390x844', 390, 844, capture_mobile_shots=True)
            verify_viewport(page, 'desktop_1440x900', 1440, 900, capture_mobile_shots=False)

            page.set_viewport_size({'width': 390, 'height': 844})
            for hero_id in ('hesman', 'anpanman', 'spiderman', 'ultraman'):
                page.get_by_test_id('btn-open-squad').click()
                page.get_by_test_id(f'squad-hero-{hero_id}').click()
                page.get_by_test_id('btn-confirm-hero').click()
                page.wait_for_timeout(180)
                page.get_by_test_id('btn-cam-finisher_splash').click()
                page.wait_for_function("""() => {
                  const imgs = Array.from(document.querySelectorAll('[data-testid="manga-page-stage"] img'));
                  return imgs.length >= 2 && imgs.every(im => im.complete && im.naturalWidth > 0);
                }""", timeout=6000)
                broken = page.evaluate("""() => Array.from(document.querySelectorAll('[data-testid="manga-page-stage"] img')).filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src)""")
                assert not broken, f"Broken imgs for hero {hero_id}: {broken}"
            print('ALL_4_HEROES_MANGA_OK=True')

            page.get_by_test_id('btn-open-squad').click()
            page.get_by_test_id('squad-hero-hesman').click()
            page.get_by_test_id('btn-confirm-hero').click()
            page.get_by_test_id('btn-cam-auto').click()

            initial_word = page.get_by_test_id('btn-switch-word').inner_text()
            for _ in range(3):
                page.get_by_test_id('btn-power-assist').click()
                page.wait_for_timeout(220)

            assert page.get_by_test_id('villain-hp-text').inner_text() == '0%'
            assert page.get_by_test_id('manga-page-stage').get_attribute('data-camera-shot') == 'victory_cover'
            page.get_by_test_id('btn-stage-next-cover').click()
            page.wait_for_timeout(220)
            assert page.get_by_test_id('villain-hp-text').inner_text() == '100%'
            next_word = page.get_by_test_id('btn-switch-word').inner_text()
            assert next_word != initial_word, f"Word did not advance: {initial_word} -> {next_word}"
            assert not console_errors, f"Console/Page errors: {console_errors}"
            print(f'BATTLE_LOOP_OK=True ({initial_word} -> {next_word})')
            browser.close()
        return 0
    finally:
        subprocess.run(['taskkill', '/F', '/T', '/PID', str(proc.pid)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


if __name__ == '__main__':
    sys.exit(main())
