// src/pages/ContactPage.jsx
export default function ContactPage() {
  return (
    <div className="min-h-[80vh] bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10">
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
          Have questions or feedback? Reach out to us anytime and we’ll respond as soon as possible.
        </p>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="text-red-500 font-semibold">📧 Email:</span>
            <a
              href="mailto:support@bloodcellai.com"
              className="text-gray-700 dark:text-gray-200 hover:text-red-500 transition"
            >
              support@bloodcellai.com
            </a>
          </div>

          {/* Developer */}
          <div className="flex items-center gap-3">
            <span className="text-red-500 font-semibold">👨‍💻 Developer:</span>
            <span className="text-gray-700 dark:text-gray-200">Sunil Kumar</span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-3">
            <span className="text-red-500 font-semibold">🛠 Tech Stack:</span>
            <span className="text-gray-700 dark:text-gray-200">React • Tailwind • Flask • ViT</span>
          </div>

          {/* Optional: Feedback Button */}
          <div className="text-center mt-6">
            <a
              href="mailto:support@bloodcellai.com"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
