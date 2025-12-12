// Navbar.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo1.png";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "NGO", to: "/#ngo" },
    { name: "Volunteers", to: "/#volunteers" },
    { name: "Gallery", to: "/#gallery" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-white/20 backdrop-blur-3xl shadow-lg" : "bg-white/10 backdrop-blur-2xl shadow-md"}
        border-b border-white/20`}
    >
      <nav className="flex items-center justify-between px-6 py-2 max-w-[1200px] mx-auto w-full">
        {/* LOGO */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={Logo} alt="ResQ Logo" className="w-8 h-8 rounded-full shadow-md" />
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-6 text-white font-semibold text-base">
          {links.map((link) => (
            <li key={link.name} className="cursor-pointer shrink-0">
              <Link
                to={link.to}
                className="relative px-3 py-1 rounded-full hover:bg-white/20 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-xl shadow-lg hover:bg-white/50 transition-all"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden px-4 sm:px-6 pb-3 w-full">
          <ul className="flex flex-col gap-3 bg-white/20 backdrop-blur-3xl border border-white/30 rounded-2xl p-4 shadow-xl w-full">
            {links.map((link) => (
              <li
                key={link.name}
                className="text-white font-semibold text-base cursor-pointer"
              >
                <Link
                  to={link.to}
                  className="block px-3 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
