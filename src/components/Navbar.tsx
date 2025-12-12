// Navbar.tsx
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaHandsHelping, FaUsers, FaImages, FaPhone } from "react-icons/fa";
import Logo from "../assets/images/logo.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", icon: <FaHome /> },
    { name: "NGO", icon: <FaHandsHelping /> },
    { name: "Volunteers", icon: <FaUsers /> },
    { name: "Gallery", icon: <FaImages /> },
    { name: "Contact", icon: <FaPhone /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-white/30 backdrop-blur-2xl shadow-xl" : "bg-white/20 backdrop-blur-xl shadow-md"}
        border-b border-white/20`}
    >
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 max-w-[1200px] mx-auto w-full">
        {/* LOGO */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={Logo} alt="ResQ Logo" className="w-10 h-10 rounded-full shadow-md" />
          <h1 className="text-xl font-extrabold text-gray-900 tracking-wide">ResQ</h1>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-4 md:gap-8 text-gray-900 font-semibold text-base flex-wrap">
          {links.map((link) => (
            <li key={link.name} className="relative group flex items-center gap-1 cursor-pointer shrink-0">
              {link.icon}
              <span className="hover:text-green-700 transition-colors">{link.name}</span>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/40 backdrop-blur-xl shadow-lg hover:bg-white/60 transition-all"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden px-4 sm:px-6 pb-3 w-full">
          <ul className="flex flex-col gap-3 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-xl w-full">
            {links.map((link) => (
              <li
                key={link.name}
                className="flex items-center gap-2 text-gray-900 font-semibold text-base hover:text-green-700 transition-all cursor-pointer"
              >
                {link.icon}
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
