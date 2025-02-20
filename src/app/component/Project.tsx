"use client";
import React from "react";
import Link from "next/link";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

// Hardcoded project data
const projects: Project[] = [
  {
    id: 1,
    title: "Minimal Blog",
    description: "This is the first project description.",
    imageSrc: "/minimal.jpg",
    link: "https://minimal-blog-beryl.vercel.app/",
  },
  {
    id: 2,
    title: "Selling Bicycle",
    description: "This is the second project description.",
    imageSrc: "/bicycle.jpg",
    link: "https://limsopheak16.github.io/Selling-Bicycle/",
  },
  {
    id: 3,
    title: "Weather Forecast",
    description: "This is the third project description.",
    imageSrc: "/weather.png",
    link: "https://pp-weather-azure.vercel.app/",
  },
  {
    id: 4,
    title: "Blog Post",
    description: "This is the fourth project description.",
    imageSrc: "/blog.png",
    link: "https://blogpost-one-rho.vercel.app/",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-center text-4xl text-white font-bold mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="bg-pink rounded-lg shadow-lg mr-10 sm:mr-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img
                src={project.imageSrc}
                className="w-[400px] h-[250px] ml-8 object-cover rounded-t-lg"
                alt={project.title}
              />
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-4 ml-8">
                {project.title}
              </h2>
              <p className="mt-2 ml-8 text-white">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
