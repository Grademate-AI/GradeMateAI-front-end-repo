import { type FC, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo.png"; // Make sure the path is correct

export const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "NGOs", "Volunteers", "Features"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#071025]/80 backdrop-blur-md border-b border-[#4b9bff]/20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="ResQ Logo"
            className="w-12 h-12 rounded-full shadow-neon hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl md:text-3xl font-bold text-[#6EE7B7] glow-neon">
            ResQ
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:from-emerald-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent bg-gradient-to-r transition-all duration-300 transform hover:scale-105"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Wallet Button */}
        <button
          className="hidden md:inline ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#4b9bff] to-[#6EE7B7] text-[#071025] font-semibold hover:scale-105 transition-transform duration-200 shadow-neon"
          onClick={() => alert("Connect Wallet")}
        >
          Connect Wallet
        </button>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-gray-300 text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#071025]/90 backdrop-blur-md p-6 flex flex-col gap-4 text-gray-300">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500 hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#4b9bff] to-[#6EE7B7] text-[#071025] font-semibold hover:scale-105 transition-transform duration-200 shadow-neon"
            onClick={() => alert("Connect Wallet")}
          >
            Connect Wallet
          </button>
        </nav>
      )}
    </header>
  );
};
