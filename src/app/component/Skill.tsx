"use client";
import React from "react";
import Image from "next/image";

interface Tool {
  name: string;
  imageSrc: string;
}

// Hardcoded tools data
const tools: Tool[] = [
  { name: "JavaScript", imageSrc: "/js.jpg" },
  { name: "Strapi", imageSrc: "/strapi.jpg" },
  { name: "HTML", imageSrc: "/html.webp" },
  { name: "CSS", imageSrc: "/css.webp" },
  { name: "Figma", imageSrc: "/figma.webp" },
  { name: "Github", imageSrc: "/github.webp" },
  { name: "Postgres", imageSrc: "/postgres.png" },
  { name: "Postman", imageSrc: "/postman.webp" },
  { name: "React", imageSrc: "/reacit.webp" },
  { name: "Tailwind", imageSrc: "/tailwind.webp" },
  { name: "Bootstrap", imageSrc: "/bootstrap.webp" },
  { name: "NextJs", imageSrc: "/nextjs.jpeg" },
];

const Tools = () => {
  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
        Programming Languages and Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black border-2 border-white p-4 rounded-lg hover:border-purple-500 transition duration-300"
          >
            <Image
              src={tool.imageSrc}
              alt={tool.name}
              width={64}  // Width of the image
              height={64} // Height of the image
              className="object-contain mb-4"
            />
            <h3 className="text-lg font-medium text-transparent text-white">
              {tool.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
