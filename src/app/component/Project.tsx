"use client"
import React, { useState, useEffect } from "react";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string; // Update based on the example you provided
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); // Set the state type to Project[]

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/projects?populate=*");
        const result = await response.json();

        // Map the API response to match the Project interface
        const formattedProjects: Project[] = result.data.map((project: any) => ({
          id: project.id,
          title: project.title,
          description: project.description,
          imageSrc: project.image ? `http://localhost:1337${project.image.url}` : "/default.jpg",
        }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center mt-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="bg-pink rounded-lg shadow-lg  mr-10 sm:mr-4">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-[400px] h-[250px] ml-8 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold text-white mt-4 ml-8">
                {project.title}
              </h2>
              <p className="mt-2 ml-8 text-white">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-white">Loading projects...</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
