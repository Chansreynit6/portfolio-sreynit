"use client";
import React from "react";
import ToolCard from "./ToolCard";

interface Tool {
  name: string;
  imageSrc: string;
}

// Hardcoded tools data
const tools: Tool[] = [
  {
    name: "JavaScript",
    imageSrc: "/javascript-logo.png",
  },
  {
    name: "TypeScript",
    imageSrc: "/typescript-logo.png",
  },
  {
    name: "React",
    imageSrc: "/react-logo.png",
  },
  {
    name: "Node.js",
    imageSrc: "/nodejs-logo.png",
  },
];

const Tools = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 ">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-8">
        Programming Languages and Tools
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool.name} imageSrc={tool.imageSrc} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
