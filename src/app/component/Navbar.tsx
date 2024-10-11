// src/components/Navbar.tsx
import React, { useEffect } from "react";
import { toggleTheme } from "./utils/theme"; // Ensure you have the correct path

const Navbar = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <div className="bg-black shadow">
      <header className="bg-slate-900">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-4">
          {/* Centered Menu */}
          <ul className="flex space-x-8 mx-auto">
            <li>
              <a href="#home" className="text-white hover:text-purple-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-purple-500">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:text-purple-500">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-purple-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Theme Toggle Button on the Right */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-pink-600 text-white rounded-full hover:bg-blue-600 transition duration-300"
          >
            {/* Toggle Icon */}
            {document.documentElement.classList.contains("dark") ? (
              <span className="mr-2">🌞</span> // Sun icon for light mode
            ) : (
              <span className="mr-2">🌜</span> // Moon icon for dark mode
            )}
            {document.documentElement.classList.contains("dark")
              ? "Light Mode"
              : "Dark Mode"}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
