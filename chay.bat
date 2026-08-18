@echo off
chcp 65001 >nul
title NGUOI QUE - xuong video nguoi que
cd /d "%~dp0"
echo.
echo  ============================================
echo    NGUOI QUE - xuong video nguoi que
echo  ============================================
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo  Chua cai Node.js tren may nay.
  echo  Tai ban LTS tai https://nodejs.org roi chay lai file nay.
  echo.
  pause
  exit /b 1
)
node may-chu.js 3020
echo.
echo  May chu da tat.
pause
