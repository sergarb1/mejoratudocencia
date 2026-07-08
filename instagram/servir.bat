@echo off
cd /d "%~dp0\.."
echo [OK] Sirviendo en http://localhost:8080
echo [1] http://localhost:8080/instagram/01-pomodoro/
echo [2] http://localhost:8080/instagram/02-vacaciones/
echo.
python -m http.server 8080
pause
