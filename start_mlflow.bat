@echo off
REM Quick startup script for MLflow UI (Windows)

REM Check if mlflow environment exists
if not exist "mlflow" (
    echo Creating mlflow virtual environment...
    python -m venv mlflow
)

REM Activate environment and start UI
echo Activating mlflow environment and starting UI...
call .\mlflow\Scripts\activate.bat
mlflow ui

echo MLflow UI is running at http://localhost:5000
echo Press Ctrl+C to stop the server
pause
