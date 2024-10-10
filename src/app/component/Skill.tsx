"use client";
import React, { useEffect, useState } from "react";
import ToolCard from "./ToolCard";

interface Tool {
  name: string;
  imageSrc: string;
}

const Tools = () => {
  
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/skills?populate=*"
        );
        const data = await response.json();

        console.log("API Response:", data); // Log the API response

        if (data && data.data) {
          const fetchedTools: Tool[] = data.data.map((tool: any) => {
            const imageFormats = tool.image?.formats;

            // Check if the image has a 'small' format and get the URL, fallback to the main image URL if not
            const imageSrc = imageFormats?.small?.url || tool.image?.url || "";

            console.log(`Tool: ${tool.title}, Image Source: ${imageSrc}`); // Log each tool's title and image source
            return {
              name: tool.title,
              imageSrc: `http://localhost:1337${imageSrc}`, // Append the base URL to image paths
            };
          });
          setTools(fetchedTools);
        } else {
          throw new Error("Unexpected data structure");
        }
      } catch (err) {
        setError("Failed to load tools.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="max-w-6xl mx-auto py-10">
    
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-8">
        Programming Languages and Tools
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool.name} imageSrc={tool.imageSrc} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
