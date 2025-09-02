import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative backdrop-blur-md bg-white/50 px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left - Logo + Brand */}
        <div className="flex items-center gap-2">
          <img
            src="images/Bright.jpeg"
            alt="BrightHub Logo"
            className="w-10"
          />
          <p className="text-[#12557C] text-xl font-bold">BrightHub</p>
        </div>

        {/* Center - Nav links (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          <a
            href="#home"
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold transition-colors duration-300 text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold transition-colors duration-300 text-lg"
          >
            About
          </a>
          <a
            href="#services"
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold transition-colors duration-300 text-lg"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold transition-colors duration-300 text-lg"
          >
            Contact
          </a>
        </div>

        {/* Right - Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#12557C] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 bg-white/90 p-4 rounded-lg shadow-lg">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold text-lg"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold text-lg"
          >
            About
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold text-lg"
          >
            Services
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-[#FFD93D] hover:text-[#FFD93D]/70 font-semibold text-lg"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
