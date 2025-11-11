# 🚀 अब Notebook से Data Visualize करो - Complete Guide

## ✅ क्या किया गया? (What We Fixed)

आपके notebook में **MLflow logging** अब सही तरीके से set up हो गया है।

### Changes Made:
1. ✅ **Kernel verification cell** added - यह चेक करता है कि आप सही environment (`mlflow` venv) में हो।
2. ✅ **ViT training cell** updated - अब properly `mlflow.start_run()` और `mlflow.pytorch.log_model()` के साथ।
3. ✅ **Performer training cell** updated - Same MLflow integration।

---

## 🎯 Ab Kya Karna Hai? (What to Do Now)

### Step 1: Notebook में Kernel Switch करो
VS Code में:
1. **Ctrl + Shift + P** दबाओ
2. **"Python: Select Interpreter"** type करो
3. **अपने `mlflow` venv को choose करो** - Path कुछ ऐसा होगा:
   ```
   ./mlflow/Scripts/python.exe (blood-cell-classification)
   ```
   या
   ```
   D:\Blood Cell Classifiaction\blood-cell-classification\mlflow\Scripts\python.exe
   ```

✅ **Check करो**: अगले cell में `sys.executable` print होगा - वह mlflow folder में होना चाहिए।

---

### Step 2: MLflow Server चलाओ (if not already running)

PowerShell में run करो:
```powershell
.\mlflow\Scripts\activate.ps1
mlflow ui
```

फिर browser में जाओ: **http://localhost:5000**

---

### Step 3: Notebook को Run करो

#### Option A: सिर्फ Kernel check करने के लिए
1. Notebook में cell 23 run करो (जिसमें `import mlflow` है)
2. Output देखो - यह बताएगा कि सही environment में हो या नहीं।

**अगर error आए:**
- "ModuleNotFoundError: No module named 'torch'" 
  - ✅ Fix: Kernel को mlflow venv पर switch करो

#### Option B: पूरी ViT training run करो (Real Training)
1. Cell 23 चलाओ (MLflow init)
2. Cell 26 चलाओ (ViT training) - यह 5 epochs में train करेगा
3. Training complete होने के बाद, dashboard को refresh करो

#### Option C: सिर्फ एक छोटा quick test करो

Cell 25 के बाद एक नया cell बनाओ (या empty cell को use करो) और यह run करो:

```python
# Quick MLflow test - बिना full training के
mlflow.set_experiment("Quick-Test")
with mlflow.start_run(run_name="test-metrics"):
    mlflow.log_param("test_param", "value123")
    mlflow.log_metric("accuracy", 0.95, step=1)
    mlflow.log_metric("accuracy", 0.96, step=2)
    mlflow.log_metric("accuracy", 0.97, step=3)
    
    # एक artifact भी save करो
    with open("test_artifact.txt", "w") as f:
        f.write("Hello MLflow!")
    mlflow.log_artifact("test_artifact.txt")

print("✅ Test run completed!")
```

फिर dashboard refresh करो - नया experiment और run दिखेगा।

---

## 📊 Dashboard में Data कैसे देखें?

### 1. **Experiments List**
```
http://localhost:5000
```
Left sidebar में सभी experiments दिखेंगे:
- `Blood-Cell-Classification-ViT` (ViT training का)
- `Blood-Cell-Classification-Performer` (Performer का)
- `Quick-Test` (अगर quick test चलाया तो)

### 2. **Run Details**
किसी भी experiment को click करो → सभी **runs** दिखेंगे।

### 3. **Metrics & Graphs**
किसी run को click करो → देखो:
- ✅ **Params**: सभी logged parameters
- ✅ **Metrics**: accuracy, loss के graphs
- ✅ **Artifacts**: saved models (vit_model, performer_model)

### 4. **Model Download करो**
```
Artifacts tab → vit_model (या performer_model) folder → download करो
```

---

## 🔍 Troubleshooting - अगर Data नहीं दिख रहा

### Problem 1: "ModuleNotFoundError: No module named 'torch'"
**Solution**: 
- Kernel को mlflow venv पर switch करो
- Ctrl+Shift+P → Python: Select Interpreter → mlflow

### Problem 2: Dashboard में नया data नहीं दिख रहा
**Solution**:
- Browser को refresh करो: **Ctrl + Shift + R** (Hard refresh)
- या नया tab खोलो: `http://localhost:5000`

### Problem 3: Model artifacts नहीं दिख रहे
**Solution**:
```powershell
# Check करो कि data disk पर save हुआ है या नहीं
dir .\mlruns -Recurse

# अगर mlruns folder खाली है तो वह गलत environment में run हुआ है
```

### Problem 4: "mlflow ui" command काम नहीं कर रहा
**Solution**:
```powershell
.\mlflow\Scripts\activate.ps1
# Ab mlflow ui try करो
mlflow ui
```

---

## 📁 File Locations

```
blood-cell-classification/
├── mlruns/                              ← MLflow data यहाँ save होता है
│   ├── 0/                              ← Default experiment
│   ├── <exp_id>/
│   │   ├── <run_id>/
│   │   │   ├── artifacts/              ← Models यहाँ हैं!
│   │   │   │   ├── vit_model/
│   │   │   │   └── performer_model/
│   │   │   ├── metrics/                ← Accuracy, loss etc.
│   │   │   └── params/                 ← Hyperparameters
├── notebooks/
│   └── Blood_Cell_Classification (2).ipynb  ← ✅ Updated!
└── ...
```

---

## ⚡ Quick Commands Reference

| Action | Command |
|--------|---------|
| Activate mlflow env | `.\mlflow\Scripts\activate.ps1` |
| Start MLflow UI | `mlflow ui` |
| Stop UI | `Ctrl + C` |
| View Dashboard | Open `http://localhost:5000` |
| Check mlruns folder | `dir .\mlruns -Recurse` |
| Switch Python | Ctrl+Shift+P → Python: Select Interpreter |

---

## ✅ Next Steps

1. **Kernel को mlflow venv पर set करो**
2. **MLflow server को start करो** (`mlflow ui`)
3. **Notebook के first few cells run करो** - आप देखोगे कि model training start हुई
4. **Dashboard को refresh करो** - metrics और models दिखने लगेंगे
5. **Compare करो**: ViT vs Performer को side-by-side dashboard में देख सको!

---

## 🎓 Example Output

जब cell run होगी, तुम्हें यह output दिखेगा:

```
Python executable: D:\Blood Cell Classifiaction\blood-cell-classification\mlflow\Scripts\python.exe
Python version: 3.14.0 ...
✅ torch version: 2.9.0
✅ mlflow version: 3.6.0

✅ MLflow is ready for tracking!
   Experiment: Blood-Cell-Classification-ViT

🚀 Starting ViT Training with MLflow tracking...
   Run name: ViT-PreTrained-5epochs
Epoch 1/5 [TRAIN]: 50%|██████    | ...
Epoch [1/5] → Loss: 0.8234, Train Acc: 62.45%, Val Acc: 68.90%
...
Epoch [5/5] → Loss: 0.2103, Train Acc: 95.67%, Val Acc: 92.34%

💾 Saving model to MLflow...
✅ MLflow run completed! View at http://localhost:5000

✅ Final ViT Test Accuracy: 91.23%
```

तुरंत dashboard पर जाओ और नया experiment देखो! 🎉

---

**Created**: November 12, 2025  
**Status**: ✅ Ready to visualize!
