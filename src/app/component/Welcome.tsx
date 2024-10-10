"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl px-4">
        
        <div className="col-span-7 place-self-center">
        <h1 className="text-white sm:mt-2 text-2xl sm:text-4xl lg:text-6xll font-extrabold">
           
           <span className="text-transparent leading-8 bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            Hello, I'm {""} <br /> <br />
            </span> 
            
              <TypeAnimation
            sequence={[
           // Same substring at the start will only be typed out once, initially
          'Sreynit',
           1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Fullstack developer',
          1000,
           'UI & UX Designer',
          1000,
         ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
          />
          </h1>
          <p className="text-[#ADB7BE] lg:text-xl mt-3 text-base sm:text-lg">
          I’m a passionate front-end developer with a strong foundation in creating clean, responsive, and user-friendly web interfaces. 
           </p>
          <div className="flex space-x-4 mt-8">
            <button className="bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600  from-primary-400 to-secondary-600 text-white px-8 py-3 rounded-full hover:from-secondary-600 hover:to-primary-400 transition-all">
              Hire Me
            </button>
            <button className="text-white border border-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all">
              Download CV
             </button>
          </div>
        </div>
        <div className="col-span-5 flex justify-end">
          <div className="bg-[#181818] rounded-full overflow-hidden w-[300px] h-[300px]">
            <Image
              src="/welcome.jpg"
              width={300}
              height={300}
              alt="Welcome Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
