import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import DetectPage from "./pages/DetectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GANPage from "./pages/GANPage"; // New page

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-[calc(100vh-150px)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/detect" element={<DetectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gan" element={<GANPage />} /> {/* GAN route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
