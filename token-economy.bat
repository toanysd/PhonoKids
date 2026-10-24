@echo off
rem ==========================================================================
rem  token-economy.bat - put this file in ANY project root and run it.
rem  Double-click = setup (safe, never overwrites) + pause at the end.
rem
rem  Usage:  token-economy.bat [setup|map|doctor] [PROJECT_DIR] [/nopause] [/other-ignores]
rem    setup   copy AGENTS.md / .geminiignore / HANDOFF.md if missing, build PROJECT_MAP
rem    map     rebuild .agents\context\PROJECT_MAP.md only (run after big refactors)
rem    doctor  check python, git, rg, ast-grep, read-guard hook, self-test
rem
rem  Kit lookup: TE_KIT, then <project>\.agents\plugins\token-economy (portable install),
rem  then %USERPROFILE%\.gemini\config\plugins\token-economy (global install).
rem  ASCII only on purpose (safe for any console code page).
rem ==========================================================================
setlocal EnableExtensions

set "TE_CMD=setup"
set "TE_ROOT=%~dp0."
set "TE_NOPAUSE="
set "TE_EXTRA="
for %%A in (%*) do if /i "%%~A"=="/nopause" set "TE_NOPAUSE=1"

:parse
if "%~1"=="" goto parsed
if /i "%~1"=="setup"          set "TE_CMD=setup"   & shift & goto parse
if /i "%~1"=="map"            set "TE_CMD=map"     & shift & goto parse
if /i "%~1"=="doctor"         set "TE_CMD=doctor"  & shift & goto parse
if /i "%~1"=="/nopause"       set "TE_NOPAUSE=1"   & shift & goto parse
if /i "%~1"=="/other-ignores" set "TE_EXTRA=--other-ignores" & shift & goto parse
if exist "%~f1\" (
  set "TE_ROOT=%~f1\."
  shift
  goto parse
)
echo [ERROR] Unknown argument or folder not found: %1
set "TE_RC=2"
goto done

:parsed
rem --- kit lookup: TE_KIT -> project-local plugin (portable) -> global plugin ---
set "TE_KITDIR="
if defined TE_KIT if exist "%TE_KIT%\scripts\te_setup.py" set "TE_KITDIR=%TE_KIT%"
if not defined TE_KITDIR if exist "%TE_ROOT%\.agents\plugins\token-economy\scripts\te_setup.py" set "TE_KITDIR=%TE_ROOT%\.agents\plugins\token-economy"
if not defined TE_KITDIR if exist "%USERPROFILE%\.gemini\config\plugins\token-economy\scripts\te_setup.py" set "TE_KITDIR=%USERPROFILE%\.gemini\config\plugins\token-economy"
if not defined TE_KITDIR (
  echo [ERROR] token-economy kit not found. Looked in:
  echo         TE_KIT, "%TE_ROOT%\.agents\plugins\token-economy", "%USERPROFILE%\.gemini\config\plugins\token-economy"
  echo         Copy the _token-economy-kit folder into this project and run its INSTALL.bat.
  set "TE_RC=3"
  goto done
)

rem --- find a real Python 3.8+ (skip the Microsoft Store alias stub) ---
set "TE_PY="
python -c "import sys; sys.exit(0 if sys.version_info >= (3, 8) else 1)" >nul 2>nul && set "TE_PY=python"
if not defined TE_PY py -3 -c "import sys; sys.exit(0 if sys.version_info >= (3, 8) else 1)" >nul 2>nul && set "TE_PY=py -3"
if not defined TE_PY (
  echo [ERROR] Python 3.8+ not found on PATH. Install Python or Miniconda first.
  set "TE_RC=4"
  goto done
)

set "PYTHONUTF8=1"
set "PYTHONIOENCODING=utf-8"
%TE_PY% "%TE_KITDIR%\scripts\te_setup.py" %TE_CMD% "%TE_ROOT%" %TE_EXTRA%
set "TE_RC=%ERRORLEVEL%"

:done
if not defined TE_NOPAUSE (
  echo.
  pause
)
endlocal & exit /b %TE_RC%
