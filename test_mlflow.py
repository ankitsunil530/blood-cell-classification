"""
Simple MLflow tracking test script
This will verify that MLflow is working correctly
"""

import mlflow
import json

# Set the experiment
mlflow.set_experiment("Test-Experiment")

# Start a run
with mlflow.start_run(run_name="Simple-Test"):
    # Log some parameters
    mlflow.log_param("param1", "value1")
    mlflow.log_param("param2", 42)
    
    # Log some metrics
    for i in range(1, 6):
        mlflow.log_metric("accuracy", 0.70 + (i * 0.05), step=i)
        mlflow.log_metric("loss", 1.0 - (i * 0.15), step=i)
    
    # Create a simple artifact
    sample_data = {
        "model": "test_model",
        "status": "working",
        "metrics": {
            "final_accuracy": 0.95,
            "final_loss": 0.25
        }
    }
    
    with open("test_results.json", "w") as f:
        json.dump(sample_data, f, indent=4)
    
    mlflow.log_artifact("test_results.json")
    
    print("✅ Test run completed successfully!")
    print("Visit http://localhost:5000 to see the results")
