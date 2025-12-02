// src/pages/AboutPage.jsx
export default function AboutPage() {
  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10">
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          About BloodCellAI
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 text-center">
          BloodCellAI is an AI-powered platform for automated blood cell classification.
          It uses a fine-tuned <span className="font-semibold text-red-600">Vision Transformer (ViT-B/16)</span> model hosted on Flask API,
          providing fast, reliable, and accurate predictions for medical analysis.
        </p>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-red-500 font-bold">•</span>
            Classifies: Neutrophil, Eosinophil, Lymphocyte, Monocyte
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500 font-bold">•</span>
            Optimized for speed and medical accuracy
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500 font-bold">•</span>
            Simple and intuitive upload & prediction workflow
          </li>
        </ul>

        {/* Optional CTA */}
        <div className="text-center mt-8">
          <a
            href="/upload"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
          >
            Try It Now
          </a>
        </div>
      </div>
    </div>
  );
}
