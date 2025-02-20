"use client";
import React from "react";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

// Hardcoded project data
const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "This is the first project description.",
    imageSrc: "/project1.jpg",
  },
  {
    id: 2,
    title: "Projeo",
    description: "This is the second project description.",
    imageSrc: "/project2.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is the third project description.",
    imageSrc: "/project3.jpg",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-center text-4xl text-white font-bold mb-8">
        My Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-pink rounded-lg shadow-lg mr-10 sm:mr-4 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-[400px] h-[250px] ml-8 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mt-4 ml-8">
              {project.title}
            </h2>
            <p className="mt-2 ml-8 text-white">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
