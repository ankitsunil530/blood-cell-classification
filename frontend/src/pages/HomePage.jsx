import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full p-0">
      
      {/* HERO SECTION */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight dark:text-white">
              AI Powered  
              <span className="text-red-600"> Blood Cell </span>  
              Classification
            </h1>

            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Upload a blood smear image and get instant predictions using 
              our Vision Transformer (ViT) deep learning model powered by Flask API.
            </p>

            <Link to="/upload">
              <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2 text-lg">
                Upload Image <ArrowRight size={20} />
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://s7d1.scene7.com/is/image/dmqualcommprod/on-device-generative-ai-with-sub-10-billion-parameter-models"
              alt="Blood Cells"
              className="w-80 md:w-96 drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold dark:text-white">
            Why Use BloodCellAI?
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-10">
            
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
              <h3 className="text-xl font-semibold dark:text-white">⚡ Fast Predictions</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Powered by Vision Transformer (ViT) model for accurate and quick blood cell detection.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
              <h3 className="text-xl font-semibold dark:text-white">🔬 Medical Accuracy</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Trained on large-scale datasets for consistent and reliable cell classification.
              </p>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
              <h3 className="text-xl font-semibold dark:text-white">📊 Easy to Use</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Simple UI — upload an image and receive instant results with confidence scores.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://blogs.novita.ai/wp-content/uploads/2024/12/1-37-1.png"
            alt="AI Model"
            className="w-80 md:w-96 mx-auto drop-shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold dark:text-white">About The Model</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-7">
              Our BloodCellAI uses a fine-tuned 
              <span className="font-semibold text-red-600"> Vision Transformer (ViT-B/16) </span> 
              model hosted on Flask. The system classifies various blood cell types like:
            </p>

            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Neutrophil</li>
              <li>Eosinophil</li>
              <li>Lymphocyte</li>
              <li>Monocyte</li>
            </ul>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              It is optimized for high medical accuracy and fast inference on real-world images.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
