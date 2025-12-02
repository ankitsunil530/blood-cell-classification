import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-gray-300 hover:text-red-400 transition duration-200";

  const activeClass =
    "text-red-400 font-semibold border-b-2 border-red-400";

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://img.freepik.com/premium-vector/hematology-blood-cell-logo-design-concept-vector-template_556845-154.jpg"
            alt="Blood Cell Logo"
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold">Blood Cell Classification</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Upload
          </NavLink>

          <NavLink
            to="/detect"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Detect
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
            onClick={() => setOpen(false)}
          >
            Upload
          </NavLink>

          <NavLink
            to="/detect"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
            onClick={() => setOpen(false)}
          >
            Detect
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
