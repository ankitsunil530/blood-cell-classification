// src/pages/UploadPage.jsx
import { useState } from "react";
import axios from "axios";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image!");
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResults(res.data);
    } catch (error) {
      console.error(error);
      alert("Prediction failed. Check Flask API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 flex flex-col md:flex-row gap-8">
        
        {/* Left: Upload & Preview */}
        <div className="flex-1 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Upload Blood Cell Image
          </h1>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-gray-700 dark:text-gray-200 mb-4"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="rounded-lg shadow-lg max-w-full mb-4 border border-gray-300 dark:border-gray-600"
            />
          )}

          <button
            onClick={handleUpload}
            className="w-full md:w-auto px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>

        {/* Right: Prediction Results */}
        <div className="flex-1">
          {results ? (
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Prediction Results
              </h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200 text-lg">
                <li className="flex justify-between border-b border-gray-300 dark:border-gray-600 py-2">
                  <span>ViT</span>
                  <span className="font-semibold text-red-600">{results.ViT}</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 dark:border-gray-600 py-2">
                  <span>CustomViT</span>
                  <span className="font-semibold text-red-600">{results.CustomViT}</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Performer</span>
                  <span className="font-semibold text-red-600">{results.Performer}</span>
                </li>
              </ul>
            </div>
          ) : (
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow text-center text-gray-500 dark:text-gray-300">
              Prediction results will appear here after uploading an image.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
