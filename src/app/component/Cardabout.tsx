import React from "react";
import Image from "next/image";

function Cardabout() {
  return (
    <div className="space-y-4 mt-8 sm:mt-14 mx-4 sm:ml-4 md:ml-12 lg:ml-16 xl:ml-20">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Education Card */}
        <div className="w-full md:w-2/3 h-auto sm:h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-4 rounded-lg transform hover:scale-105">
          <div className="min-w-[48px] sm:min-w-[64px] md:min-w-[80px] h-12 sm:h-14 flex items-center justify-center">
            <Image
              src="/education.webp"
              alt="Education Image"
              width={800} // Set the width
              height={600} // Set the height
              className="w-full h-full object-contain"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg text-white font-semibold">
              Education
            </h3>
            <p className="text-xs sm:text-sm text-white">
              I am studying Fullstack Development and focusing on technologies
              like React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Problem Solving Card */}
        <div className="w-full md:w-1/3 h-auto sm:h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-4 rounded-lg transform hover:scale-105">
          <div className="min-w-[40px] sm:min-w-[48px] md:min-w-[64px] h-12 sm:h-14 flex items-center justify-center">
            <Image
              src="/solving.webp"
              alt="Problem Solving Image"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg text-white font-semibold">
              Problem Solving
            </h3>
            <p className="text-xs sm:text-sm text-white">
              I approach challenges with a logical/systematic mindset.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        {/* Experience Card */}
        <div className="w-full md:w-1/3 h-auto sm:h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-4 rounded-lg transform hover:scale-105">
          <div className="min-w-[48px] sm:min-w-[64px] md:min-w-[80px] h-12 sm:h-14 flex items-center justify-center">
            <Image
              src="/experience.webp"
              alt="Experience Image"
              width={800} // Set the width
              height={600} // Set the height
              className="w-full h-full object-contain"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg text-white font-semibold">
              Experience
            </h3>
            <p className="text-xs sm:text-sm text-white">
              I have worked on several school projects and created websites for
              NGOs.
            </p>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="w-full md:w-2/3 h-auto sm:h-[120px] bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-200 transition-all duration-300 ease-in-out shadow-lg p-3 sm:p-4 flex items-center space-x-2 sm:space-x-4 rounded-lg transform hover:scale-105">
          <div className="min-w-[48px] sm:min-w-[56px] md:min-w-[72px] h-12 sm:h-14 flex items-center justify-center">
            <Image
              src="/technical.webp"
              alt="Technical Skills Image"
              width={800} // Set the width
              height={600} // Set the height
              className="w-full h-full object-contain"
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg text-white font-semibold">
              Technical Skills
            </h3>
            <p className="text-xs sm:text-sm text-white">
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
