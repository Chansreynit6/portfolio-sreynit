import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";
import About from "./component/About";
import Skill from "./component/Skill"
import Project from "./component/Project";
import Contact from "./component/Contact";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
        <Welcome />
        
        <About />
        <Skill/>
        <Project/>
        <Contact />
        
        
        </div>
        
      </main>
    );
  }