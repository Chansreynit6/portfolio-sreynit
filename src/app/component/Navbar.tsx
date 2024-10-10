import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black shadow ">
      <header className="bg-black shadow">
        <nav className="max-w-6xl mx-auto py-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="#home" className="text-white hover:text-purple-500">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-purple-500">About</a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:text-purple-500">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-ppurple-500">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
