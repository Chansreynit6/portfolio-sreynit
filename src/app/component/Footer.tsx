import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-500 to-purple-600 text-gray-200 py-4 hover:bg-slate-200 transition duration-300">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2024 chansreynitngoun. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Chansreynit6"
            target="_blank"
            className="hover:text-black-400"
          >
            GitHub
          </a>
          <a
            href="mailto:chansreynit.ngoun@institute.pse.ngo"
            className="hover:text-black-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
