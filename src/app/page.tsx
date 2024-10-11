// src/pages/index.tsx
"use client"
import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";
import About from "./component/About";
import Skill from"./component/Skill";
import Project from "./component/Project"
import Contact from "./component/Contact";
import Cardabout from "./component/Cardabout";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";


export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme === "dark" ? "dark" : "light");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
      <>
          
          <main className="flex min-h-screen flex-col bg-slate-900 dark:bg-[#121212]">
              <Navbar />
              <div className="container mt-24 mx-auto px-12 py-4">
                  <Welcome />
                  <Cardabout />
                  <About />
                  <Skill />
                  <Project />
                  <Contact />
                  <Footer />
              </div>
          </main>
      </>
  );
}