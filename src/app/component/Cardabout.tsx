import React from "react";

function Cardabout() {
  return (
    <div className="space-y-4 mt-14 ml-4 md:ml-12 lg:ml-16 xl:ml-20">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-full md:w-2/3 h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-4 flex items-center space-x-4 rounded-lg transform hover:scale-105">
          <div className="w-16 md:w-20 h-14">
            <img
              src="/education.webp"
              alt="Education Image"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold">Education</h3>
            <p className="text-sm text-white">
              I am studying Fullstack Development and focusing on technologies
              like React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-4 flex items-center space-x-4 rounded-lg transform hover:scale-105">
          <div className="w-12 md:w-16 h-14">
            <img
              src="/solving.webp"
              alt="Problem Solving Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold">
              Problem Solving
            </h3>
            <p className="text-sm text-white">
              I approach challenges with a logical/systematic mindset.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/3 h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-4 flex items-center space-x-4 rounded-lg transform hover:scale-105">
          <div className="w-16 md:w-20 h-14">
            <img
              src="/experience.webp"
              alt="Experience Image"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold">Experience</h3>
            <p className="text-sm text-white">
              I have worked on several school projects and created websites for
              NGOs.
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3 h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-4 flex items-center space-x-4 rounded-lg transform hover:scale-105">
          <div className="w-14 md:w-18 h-14">
            <img
              src="/technical.webp"
              alt="Technical Skills Image"
              className="w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg text-white font-semibold">
              Technical Skills
            </h3>
            <p className="text-sm text-white">
              As a Fullstack Web Developer, I specialize in React JS, Next.JS,
              and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardabout;
