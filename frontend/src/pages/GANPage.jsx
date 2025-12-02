// src/pages/GANPage.jsx
import { useState } from "react";
import axios from "axios";

export default function GANPage() {
  const [ganImage, setGanImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://127.0.0.1:5000/generate_gan");
      setGanImage(`http://127.0.0.1:5000/${res.data.gan_image}`);
    } catch (error) {
      console.error(error);
      alert("GAN generation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Generate Blood Cell Image (GAN)
        </h1>

        <button
          onClick={handleGenerate}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium mb-6"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>

        {ganImage && (
          <img
            src={ganImage}
            alt="Generated Blood Cells"
            className="mx-auto mt-4 rounded-lg shadow-lg max-w-full"
          />
        )}
      </div>
    </div>
  );
}
