"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <nav className="bg-black-900 shadow-md w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-white text-xl font-bold">MyPortfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><Link href="#home" className="hover:text-purple-500">Home</Link></li>
          <li><Link href="#About" className="hover:text-purple-500">About</Link></li>
          <li><Link href="#portfolio" className="hover:text-purple-500">Project</Link></li>
          <li><Link href="#contact" className="hover:text-purple-500">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center w-full bg-slate-800 text-white text-lg space-y-2 text-center py-4">
          <li><Link href="#home" className="block py-2" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="#about" className="block py-2" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="#portfolio" className="block py-2" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link href="#contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
