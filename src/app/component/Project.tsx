"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    description: "A simple platform where users can write and share their own blog posts easily",
    imageSrc: "/minimal.jpg",
    link: "https://minimal-blog-beryl.vercel.app/",
  },
  {
    id: 2,
    title: "Selling Bicycle",
    description: "An online store for buying bicycles with a smooth shopping experience",
    imageSrc: "/bicycle.jpg",
    link: "https://limsopheak16.github.io/Selling-Bicycle/",
  },
  {
    id: 3,
    title: "Weather Forecast",
    description: "An app that shows real-time weather updates and forecast",
    imageSrc: "/weather.png",
    link: "https://pp-weather-azure.vercel.app/",
  },
  {
    id: 4,
    title: "Blog Post",
    description: "A place where users can post anything they like and share their ideas with others",
    imageSrc: "/blog.png",
    link: "https://blogpost-one-rho.vercel.app/",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 mt-8">
      <h2 className="text-center text-3xl sm:text-4xl text-white font-bold mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 sm:mt-12 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-pink rounded-lg shadow-lg mx-auto sm:mr-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[350px] sm:max-w-none">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={350} // Set appropriate width
                height={250} // Set appropriate height
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
              />
              <div className="p-4 sm:ml-4">
                <h2 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-white">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
