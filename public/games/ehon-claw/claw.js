// Ehon Sticker Claw Machine Game
// Physics & Animation for Ehon Plush Prize Grabbing

const canvas = document.getElementById('clawCanvas');
const ctx = canvas.getContext('2d');
const starScoreEl = document.getElementById('starScore');
const moveLeftBtn = document.getElementById('moveLeftBtn');
const moveRightBtn = document.getElementById('moveRightBtn');
const grabBtn = document.getElementById('grabBtn');
const exitBtn = document.getElementById('exitBtn');
const prizeModal = document.getElementById('prizeModal');
const prizeImg = document.getElementById('prizeImg');
const prizeName = document.getElementById('prizeName');
const prizeDescription = document.getElementById('prizeDescription');
const continueClawBtn = document.getElementById('continueClawBtn');

let WIDTH = canvas.parentElement.clientWidth;
let HEIGHT = canvas.parentElement.clientHeight;
canvas.width = WIDTH;
canvas.height = HEIGHT;

window.addEventListener('resize', () => {
  WIDTH = canvas.parentElement.clientWidth;
  HEIGHT = canvas.parentElement.clientHeight;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  initPrizes();
});

// Speech Synthesis
function speakEnglish(text, rate = 0.85) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate;
    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn('Speech error:', e);
  }
}

// Ehon Prize Assets
const EHON_PRIZES = [
  { id: 'leo', name: 'LION', word: 'lion', desc: 'Bé đã gắp được Bạn Sư Tử Leo dũng cảm!', url: '/assets/ehon/leo.jpg' },
  { id: 'henny', name: 'HEN', word: 'hen', desc: 'Bé đã gắp được Cô Gà Mái Henny vui tươi!', url: '/assets/ehon/hen.jpg' },
  { id: 'piggy', name: 'PIG', word: 'pig', desc: 'Bé đã gắp được Chú Heo Hồng tinh nghịch!', url: '/assets/ehon/pig.jpg' },
  { id: 'starry', name: 'STAR', word: 'star', desc: 'Bé đã gắp được Ngôi Sao Vàng lấp lánh!', url: '/assets/ehon/star.jpg' },
  { id: 'sunny', name: 'SUN', word: 'sun', desc: 'Bé đã gắp được Mặt Trời Nắng Ấm rạng rỡ!', url: '/assets/ehon/sun.jpg' },
  { id: 'apple', name: 'APPLE', word: 'apple', desc: 'Bé đã gắp được Quả Táo Đỏ ngọt lành!', url: '/assets/ehon/apple.jpg' },
  { id: 'cat', name: 'CAT', word: 'cat', desc: 'Bé đã gắp được Chú Mèo Cam lười biếng!', url: '/assets/ehon/cat.jpg' },
  { id: 'ship', name: 'SHIP', word: 'ship', desc: 'Bé đã gắp được Con Tàu Đại Dương kỳ diệu!', url: '/assets/ehon/ship.jpg' }
];

// Preload Images
const prizeImages = {};
EHON_PRIZES.forEach((p) => {
  const img = new Image();
  img.src = p.url;
  prizeImages[p.id] = img;
});

// Claw State Machine
const STATE = {
  IDLE: 0,
  DROP: 1,
  GRAB: 2,
  RETRACT: 3,
  RETURN: 4,
  RELEASE: 5
};

let state = STATE.IDLE;
let claw = {
  x: WIDTH / 2,
  y: 35,
  speed: 4,
  armOpen: true,
  heldPrize: null
};

let prizes = [];
let stars = 0;
let keys = { left: false, right: false };

function initPrizes() {
  prizes = [];
  const count = 18;
  const bottomZoneHeight = 130;

  for (let i = 0; i < count; i++) {
    const template = EHON_PRIZES[i % EHON_PRIZES.length];
    const radius = 24;
    prizes.push({
      ...template,
      x: 100 + Math.random() * (WIDTH - 150),
      y: HEIGHT - 20 - Math.random() * bottomZoneHeight,
      radius: radius,
      rotation: (Math.random() - 0.5) * 0.4
    });
  }
}

initPrizes();

// Movement input bindings
moveLeftBtn.addEventListener('pointerdown', () => (keys.left = true));
window.addEventListener('pointerup', () => {
  keys.left = false;
  keys.right = false;
});
moveRightBtn.addEventListener('pointerdown', () => (keys.right = true));

window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'arrowleft' || k === 'a') keys.left = true;
  if (k === 'arrowright' || k === 'd') keys.right = true;
  if (k === ' ' || k === 'enter') triggerGrab();
});

window.addEventListener('keyup', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'arrowleft' || k === 'a') keys.left = false;
  if (k === 'arrowright' || k === 'd') keys.right = false;
});

function triggerGrab() {
  if (state === STATE.IDLE) {
    state = STATE.DROP;
    claw.armOpen = true;
  }
}

grabBtn.addEventListener('click', triggerGrab);

exitBtn.addEventListener('click', () => {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({ type: 'EXIT_GAME' }, '*');
  }
});

continueClawBtn.addEventListener('click', () => {
  prizeModal.classList.remove('show');
  state = STATE.IDLE;
});

// Update & Render Loop
function update() {
  if (state === STATE.IDLE) {
    if (keys.left) claw.x = Math.max(100, claw.x - claw.speed);
    if (keys.right) claw.x = Math.min(WIDTH - 40, claw.x + claw.speed);
  } else if (state === STATE.DROP) {
    claw.y += 4;
    // Check if hit bottom or grabbed prize
    if (claw.y >= HEIGHT - 60) {
      state = STATE.GRAB;
    } else {
      for (const p of prizes) {
        const dist = Math.hypot(claw.x - p.x, claw.y - p.y);
        if (dist < p.radius + 15) {
          claw.heldPrize = p;
          state = STATE.GRAB;
          break;
        }
      }
    }
  } else if (state === STATE.GRAB) {
    claw.armOpen = false;
    setTimeout(() => {
      state = STATE.RETRACT;
    }, 350);
  } else if (state === STATE.RETRACT) {
    claw.y = Math.max(35, claw.y - 3.5);
    if (claw.heldPrize) {
      claw.heldPrize.x = claw.x;
      claw.heldPrize.y = claw.y + 26;
    }
    if (claw.y <= 35) {
      state = STATE.RETURN;
    }
  } else if (state === STATE.RETURN) {
    claw.x = Math.max(45, claw.x - 3);
    if (claw.heldPrize) {
      claw.heldPrize.x = claw.x;
      claw.heldPrize.y = claw.y + 26;
    }
    if (claw.x <= 45) {
      state = STATE.RELEASE;
    }
  } else if (state === STATE.RELEASE) {
    claw.armOpen = true;
    if (claw.heldPrize) {
      const prize = claw.heldPrize;
      claw.heldPrize = null;
      // Drop prize into chute
      prizes = prizes.filter((p) => p !== prize);

      // Award & Show Prize Modal
      stars += 3;
      starScoreEl.textContent = stars;
      speakEnglish(`${prize.name}! ${prize.word}!`, 0.85);

      prizeImg.src = prize.url;
      prizeName.textContent = prize.name;
      prizeDescription.textContent = prize.desc;
      prizeModal.classList.add('show');

      // Send to parent
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'ADD_STARS', amount: 3 }, '*');
      }
    } else {
      state = STATE.IDLE;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  // 1. Draw Prizes on bottom
  prizes.forEach((p) => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    // Golden Rim
    ctx.beginPath();
    ctx.arc(0, 0, p.radius + 3, 0, Math.PI * 2);
    ctx.fillStyle = '#fde68a';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#f59e0b';
    ctx.stroke();

    // Image circle
    ctx.beginPath();
    ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
    ctx.clip();

    const img = prizeImages[p.id];
    if (img && img.complete) {
      ctx.drawImage(img, -p.radius, -p.radius, p.radius * 2, p.radius * 2);
    } else {
      ctx.fillStyle = '#fef3c7';
      ctx.fill();
    }
    ctx.restore();
  });

  // 2. Draw Top Crane Rail
  ctx.fillStyle = '#cbd5e1';
  ctx.fillRect(0, 10, WIDTH, 12);
  ctx.fillStyle = '#94a3b8';
  ctx.fillRect(0, 20, WIDTH, 4);

  // 3. Draw Crane Trolley
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(claw.x - 22, 10, 44, 18);
  ctx.fillStyle = '#d97706';
  ctx.fillRect(claw.x - 18, 14, 36, 10);

  // 4. Draw Cable Wire
  ctx.beginPath();
  ctx.moveTo(claw.x, 26);
  ctx.lineTo(claw.x, claw.y);
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 3;
  ctx.stroke();

  // 5. Draw Claw Head & Arms
  ctx.save();
  ctx.translate(claw.x, claw.y);

  // Central hub
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#f59e0b';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#b45309';
  ctx.stroke();

  // Left & Right Arms
  const spread = claw.armOpen ? 0.6 : 0.15;

  // Left arm
  ctx.beginPath();
  ctx.moveTo(0, 4);
  ctx.quadraticCurveTo(-15 - spread * 20, 15, -10 - spread * 15, 28);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#d97706';
  ctx.stroke();

  // Right arm
  ctx.beginPath();
  ctx.moveTo(0, 4);
  ctx.quadraticCurveTo(15 + spread * 20, 15, 10 + spread * 15, 28);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#d97706';
  ctx.stroke();

  ctx.restore();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
