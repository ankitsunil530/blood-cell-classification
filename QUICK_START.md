# 🩸 MLflow - Complete Quick Start Guide

## ✅ Status
- ✅ MLflow installed
- ✅ MLflow server running at `http://localhost:5000`
- ✅ Test data already tracked and visible

---

## 📊 How to See Your Data Right Now

### Step 1: Open MLflow Dashboard
Go to your browser: **http://localhost:5000**

You should see:
- **Test-Experiment** in the left sidebar
- One run called **Simple-Test** inside it
- Metrics like accuracy and loss plotted

### Step 2: Click on "Test-Experiment"
You'll see:
- A list of all runs
- Performance metrics
- A clickable run entry

### Step 3: Click on "Simple-Test" Run
You'll see detailed info:
- **Params**: Parameter values logged
- **Metrics**: Graphs of accuracy and loss over 5 steps
- **Artifacts**: The JSON file we saved

---

## 🚀 Now Track Your Real Training

### Option A: Use Updated Notebook (Recommended)
Your notebook `Blood_Cell_Classification (2).ipynb` is already updated with MLflow tracking.

**To use it:**
1. Open the notebook
2. Install required packages in your main Python (not mlflow venv):
   ```powershell
   pip install torch torchvision opencv-python
   ```
3. Run the notebook cells
4. Metrics will automatically appear in MLflow dashboard

### Option B: Use Simple Training Script
Create a new file with your training code that includes:
```python
import mlflow

mlflow.set_experiment("Blood-Cell-Training")
with mlflow.start_run():
    mlflow.log_param("epochs", 5)
    
    for epoch in range(5):
        # your training code
        accuracy = calculate_accuracy()
        mlflow.log_metric("accuracy", accuracy, step=epoch)
```

---

## 🎯 Quick Commands

| Action | Command |
|--------|---------|
| Check if running | Visit http://localhost:5000 |
| Run test again | `.\mlflow\Scripts\activate.ps1 ; python test_mlflow.py` |
| Start server | `.\mlflow\Scripts\activate.ps1 ; mlflow ui` |
| Stop server | `Ctrl + C` in terminal |
| View database | `mlruns/` folder in project root |

---

## 📈 What to Expect When Training

When you run training with MLflow:
1. **Experiment created** automatically
2. **Run started** with timestamp
3. **Metrics logged** every epoch
4. **Dashboard updates** in real-time
5. **Model saved** as artifact

---

## 💡 Tips

✅ **Use MLflow for:**
- Compare different models (ViT vs Performer)
- Track hyperparameter experiments
- Save best models
- View training progress in real-time

---

## 🔍 Troubleshooting

### Can't see data?
1. Make sure server is running: `mlflow ui`
2. Refresh browser: `Ctrl + R`
3. Check `mlruns/` folder exists

### Can't start server?
```powershell
.\mlflow\Scripts\activate.ps1
mlflow ui --port 5001
# Then visit http://localhost:5001
```

### Missing packages?
```powershell
.\mlflow\Scripts\activate.ps1
pip install torch torchvision tqdm
```

---

**Last Updated**: November 11, 2025
