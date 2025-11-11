# 🩸 Blood Cell Classification - MLflow Integration Summary

## ✅ Setup Complete!

Your MLflow environment is ready to track and visualize your blood cell classification model training.

---

## 🚀 Quick Start

### Step 1: MLflow UI is Already Running
✅ **Status**: MLflow server is active at `http://localhost:5000`

### Step 2: Access MLflow Dashboard
Open your browser and go to:
```
http://localhost:5000
```

### Step 3: Run Your Notebook
Your notebook has been updated with MLflow tracking. When you run the training cells:
- ✅ All metrics are automatically logged
- ✅ Models are saved as artifacts
- ✅ Hyperparameters are recorded

---

## 📊 What Gets Tracked

### For Vision Transformer (ViT):
```
Experiment: "Blood-Cell-Classification-ViT"
├── Run: ViT-PreTrained-5epochs
│   ├── Hyperparameters
│   │   ├── model_type: Vision Transformer (PreTrained)
│   │   ├── epochs: 5
│   │   ├── optimizer: AdamW
│   │   └── batch_size: 32
│   ├── Metrics (per epoch)
│   │   ├── train_loss
│   │   ├── train_accuracy
│   │   └── val_accuracy
│   └── Artifacts
│       └── vit_model/ (trained model)
```

### For Performer:
```
Experiment: "Blood-Cell-Classification-Performer"
├── Run: Performer-5epochs
│   ├── Hyperparameters
│   ├── Metrics (per epoch)
│   └── Artifacts
│       └── performer_model/ (trained model)
```

---

## 🎯 How to Use MLflow UI

### View Experiments
1. Open http://localhost:5000
2. Left sidebar shows all experiments
3. Click experiment name to see all runs

### Compare Models
1. Select multiple runs with checkboxes
2. Click **"Compare"** button
3. Side-by-side comparison of metrics

### Download Models
1. Click on any run
2. Scroll to **"Artifacts"** section
3. Download the model folder with weights

### Track Metrics in Real-time
- Graphs update automatically as training progresses
- Hover over graphs to see exact values
- Toggle metrics on/off

---

## 📁 Files Created/Modified

```
blood-cell-classification/
├── mlflow/                          # Virtual environment (auto-created)
├── mlruns/                          # Experiment data (auto-created)
├── mlflow_tracking.py              # Helper functions for tracking ✨ NEW
├── MLFLOW_GUIDE.md                 # Detailed guide ✨ NEW
├── start_mlflow.bat                # Windows startup script ✨ NEW
├── start_mlflow.sh                 # Linux/Mac startup script ✨ NEW
└── notebooks/
    └── Blood_Cell_Classification (2).ipynb  # ✏️ UPDATED with tracking
```

---

## 🔧 Advanced Usage

### Log Custom Metrics
```python
mlflow.log_metric("custom_metric", value, step=epoch)
```

### Log Plots/Images
```python
mlflow.log_image(image_array, "sample_image.png")
mlflow.log_artifact("plot.png")
```

### Add Notes/Tags
```python
mlflow.set_tag("model_notes", "Trained with data augmentation")
mlflow.set_tag("status", "production-ready")
```

### Save Training History
```python
import json
with open("metrics.json", "w") as f:
    json.dump(training_history, f)
mlflow.log_artifact("metrics.json")
```

---

## ⚠️ Troubleshooting

### Port 5000 Already in Use?
```powershell
mlflow ui --port 5001
# Then visit http://localhost:5001
```

### MLflow Command Not Found?
```powershell
.\mlflow\Scripts\activate.ps1
pip install mlflow
mlflow ui
```

### Models Not Showing?
Make sure you ran the training with the updated notebook cells that include:
```python
with mlflow.start_run():
    # your training code
    mlflow.pytorch.log_model(model, "model_name")
```

---

## 📈 Viewing Results

### Training Progress
- **Graphs Tab**: Visual representation of metrics over epochs
- **Charts**: Accuracy and loss curves for comparison

### Best Model Selection
- Sort by highest `val_accuracy`
- Download that run's model artifacts
- Use for inference/deployment

### Model Comparison
- Compare ViT vs Performer side-by-side
- Compare different epochs
- Find optimal hyperparameters

---

## 🎓 Next Steps

1. **Run Your Notebook**
   ```
   Open notebooks/Blood_Cell_Classification (2).ipynb
   Run all cells (Shift + Alt + Enter)
   ```

2. **Monitor MLflow Dashboard**
   ```
   Visit http://localhost:5000
   Watch metrics update in real-time
   ```

3. **Compare Results**
   ```
   After both ViT and Performer training complete
   Use MLflow Compare feature
   ```

4. **Deploy Best Model**
   ```
   Download artifacts from best run
   Use for inference/production
   ```

---

## 📞 Commands Reference

| Action | Command |
|--------|---------|
| Activate MLflow venv | `.\mlflow\Scripts\activate.ps1` |
| Start MLflow UI | `mlflow ui` |
| Stop MLflow UI | `Ctrl + C` |
| View on browser | `http://localhost:5000` |
| Change port | `mlflow ui --port 5001` |
| Remote access | `mlflow ui --host 0.0.0.0` |

---

## 🔐 Security Notes

- MLflow UI is currently set to **localhost-only** (secure)
- For remote access, use: `mlflow ui --host 0.0.0.0`
- Requires authentication setup for production

---

## 📚 Additional Resources

- [MLflow Official Docs](https://mlflow.org/docs)
- [MLflow Python API](https://mlflow.org/docs/latest/python_api/index.html)
- [PyTorch MLflow Integration](https://mlflow.org/docs/latest/deep-learning/pytorch/index.html)

---

**Last Updated**: November 11, 2025
**Status**: ✅ Production Ready

Happy tracking! 🚀
