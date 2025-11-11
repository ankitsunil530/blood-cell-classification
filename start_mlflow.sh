#!/bin/bash
# Quick startup script for MLflow UI

# Check if mlflow environment exists
if [ ! -d "mlflow" ]; then
    echo "Creating mlflow virtual environment..."
    python -m venv mlflow
fi

# Activate environment and start UI
echo "Activating mlflow environment and starting UI..."
source mlflow/bin/activate
mlflow ui

echo "MLflow UI is running at http://localhost:5000"
echo "Press Ctrl+C to stop the server"
