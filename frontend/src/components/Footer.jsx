export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* BRAND INFO */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Blood<span className="text-red-500">Cell</span>AI
          </h2>
          <p className="mt-3 text-sm leading-6">
            A deep learning powered platform for automated blood cell 
            classification using Vision Transformer (ViT) Model and Flask API.
            Designed for fast, accurate and smart medical analysis.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Upload Image</li>
            <li className="hover:text-red-500 cursor-pointer">Predictions</li>
            <li className="hover:text-red-500 cursor-pointer">About Model</li>
            <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <span className="text-red-400">support@bloodcellai.com</span></li>
            <li>Developer: Sunil Kumar</li>
            <li>Tech Used: React • Flask • ViT • Tailwind</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BloodCellAI — All Rights Reserved.
      </div>
    </footer>
  );
}
