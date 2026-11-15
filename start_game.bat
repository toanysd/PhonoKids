@echo off
setlocal EnableExtensions
chcp 65001 >nul
title HeroSpeak Kids - Game Hoc Tieng Anh

cd /d "%~dp0"

echo ============================================================
echo   HEROSPEAK KIDS - KHOI DONG GAME HOC TIENG ANH (3-8 TUOI)
echo ============================================================

where node >nul 2>nul
if errorlevel 1 (
    echo [LOI] Khong tim thay Node.js tren may. Vui long cai dat Node.js truoc.
    pause
    exit /b 1
)

if not exist "node_modules\vite\bin\vite.js" (
    echo [1/2] Dang cai dat thu vien can thiet lan dau...
    call npm install --silent --no-audit --no-fund
    if errorlevel 1 (
        echo [LOI] Cai dat thu vien that bai.
        pause
        exit /b 1
    )
)

set "GAME_PORT=5180"
for /f "usebackq delims=" %%P in (`node -e "const net=require('net');(function findPort(p){if([3000,5000,8000,8080].includes(p))return findPort(p+1);const s=net.createServer();s.unref();s.on('error',()=>findPort(p+1));s.listen({port:p,exclusive:true},()=>{const chosen=s.address().port;s.close(()=>console.log(chosen));});})(5180);"`) do set "GAME_PORT=%%P"

echo [OK] Dang mo HeroSpeak Kids tai cong %GAME_PORT% (tu dong mo trinh duyet)...
echo      Goi y: Dung Chrome hoac Edge va cho phep Microphone de be luyen noi!
echo      Nhan Ctrl+C hoac dong cua so nay khi muon tat game.
echo.

node "node_modules\vite\bin\vite.js" --port %GAME_PORT% --open

if errorlevel 1 (
    echo.
    echo [LOI] Server dung dot ngot. Xem thong bao loi phia tren.
    pause
    exit /b 1
)
