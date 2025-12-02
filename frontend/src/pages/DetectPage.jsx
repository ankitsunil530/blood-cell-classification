// src/pages/DetectPage.jsx
import { useState } from "react";
import axios from "axios";

export default function DetectPage() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleDetect = async () => {
    if (!image) return alert("Please upload an image first!");
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data.result);
    } catch (error) {
      console.error(error);
      alert("Detection failed. Check Flask API.");
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10">
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Detect Blood Cells
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
          Upload a blood cell image below to see the prediction result and detected cells.
        </p>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="block mx-auto mb-4"
        />

        {/* Detect Button */}
        <button
          onClick={handleDetect}
          className="block mx-auto px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
        >
          Detect
        </button>

        {/* Result Card */}
        {result && (
          <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
              Prediction Result
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-lg">
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
