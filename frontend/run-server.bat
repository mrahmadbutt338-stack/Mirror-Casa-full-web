
@echo off
echo Checking Node.js installation...
node --version
if %errorlevel% neq 0 (
    echo Node.js is not installed! Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed!
echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Failed to install dependencies!
    pause
    exit /b 1
)

echo Dependencies installed! Starting server...
call npm run dev
pause
