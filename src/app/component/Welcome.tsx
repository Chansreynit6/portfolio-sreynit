"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 w-full max-w-6xl">
        {/* Left Section - Text */}
        <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-white text-xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
              Hello, I'm <br />
            </span>
            <TypeAnimation
              sequence={["Sreynit", 1000, "Fullstack Developer", 1000]}
              wrapper="span"
              speed={50}
              className="block mt-2"
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-sm sm:text-lg lg:text-xl mt-4 sm:mt-2 max-w-md px-4 sm:px-0">
            I'm a passionate front-end developer with a strong foundation in
            creating clean, responsive, and user-friendly web interfaces.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-6 w-full sm:w-auto">
            <Link href="/contact">
              <button className="bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:from-secondary-600 hover:to-primary-400 transition-all w-full sm:w-auto">
                Hire Me
              </button>
            </Link>
            <a
              href="/Ngoun Chansreynit C3-WMAD CV 2025.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border border-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-pink-600 transition-all text-center w-full sm:w-auto"
            >
              View CV
            </a>
          </div>
        </div>
        {/* Right Section - Image */}
        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
          <div className="bg-[#181818] rounded-full overflow-hidden w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px]">
            <Image
              src="/welcome.jpg"
              width={300}
              height={300}
              alt="Welcome Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;