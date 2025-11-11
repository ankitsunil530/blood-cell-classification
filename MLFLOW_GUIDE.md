# MLflow Setup Guide for Blood Cell Classification

## Quick Start

### 1. **Activate Virtual Environment and Start MLflow UI**
```powershell
.\mlflow\Scripts\activate.ps1
mlflow ui
```

Then open your browser at: **http://localhost:5000**

### 2. **Your Notebook is Ready**
The notebook has been updated with MLflow tracking. When you run the training cells, metrics will automatically be logged to MLflow.

---

## What Gets Tracked?

### Hyperparameters Logged:
- Model type (ViT or Performer)
- Number of epochs
- Optimizer (AdamW)
- Batch size
- Device (CPU/GPU)

### Metrics Logged:
- Training loss (per epoch)
- Training accuracy (per epoch)
- Validation accuracy (per epoch)

### Artifacts Saved:
- Trained model weights (.pt files)

---

## How to Use MLflow UI

### View All Experiments:
1. Go to **http://localhost:5000**
2. Click on an experiment name (e.g., "Blood-Cell-Classification-ViT")
3. View all runs with their metrics

### Compare Models:
1. Select multiple runs with checkboxes
2. Click "Compare" button
3. See side-by-side metrics comparison

### Download Models:
1. Click on a run
2. Scroll to "Artifacts" section
3. Download the model folder

---

## Advanced: Log Additional Data

### Log Images:
```python
mlflow.log_image(image, "sample_image.png")
```

### Log Plots:
```python
import matplotlib.pyplot as plt
plt.plot(epochs, accuracies)
plt.savefig("accuracy_curve.png")
mlflow.log_artifact("accuracy_curve.png")
```

### Log Custom Metrics:
```python
mlflow.log_metric("custom_metric_name", value, step=epoch)
```

### Log Tags/Notes:
```python
mlflow.set_tag("model_version", "v1.0")
mlflow.set_tag("notes", "Trained with augmented data")
```

---

## Directory Structure

```
blood-cell-classification/
├── mlruns/                          # MLflow runs directory
│   ├── 0/                          # Experiment folder
│   │   ├── <run_id>/              # Individual run folder
│   │   │   ├── artifacts/         # Model and other files
│   │   │   ├── metrics/           # Metrics data
│   │   │   └── params/            # Hyperparameters
├── mlflow_tracking.py             # Tracking helper functions
└── notebooks/
    └── Blood_Cell_Classification.ipynb
```

---

## Troubleshooting

### MLflow command not found:
```powershell
.\mlflow\Scripts\activate.ps1
pip install mlflow
```

### Port 5000 already in use:
```powershell
mlflow ui --port 5001
```

### Can't connect to MLflow:
- Ensure the server is running in background
- Check http://localhost:5000

---

## Environment Variables (Optional)

Create a `.env` file:
```
MLFLOW_TRACKING_URI=http://localhost:5000
MLFLOW_REGISTRY_URI=http://localhost:5000
```

Then in your code:
```python
import os
from dotenv import load_dotenv
load_dotenv()
mlflow.set_tracking_uri(os.getenv('MLFLOW_TRACKING_URI'))
```

---

## Tips

✅ **Best Practices:**
- Always use meaningful run names
- Log hyperparameters before training
- Save trained models automatically
- Add tags for easy filtering
- Document your experiments with notes

📊 **For Production:**
- Use a dedicated MLflow server
- Store artifacts in S3/cloud storage
- Set up model registry for versioning
- Use MLflow for A/B testing

---

Generated: November 11, 2025
