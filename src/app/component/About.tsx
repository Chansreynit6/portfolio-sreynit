import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <section>
      <div className=" text-white md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 mr-10">
        <Image
          src="/about.jpg"
          width={350}
          height={100}
          alt="About Image"
          className="sm:ml-[80px] rounded-lg mr-[80px] mt-8 "
        />

        <div className=" sm:mr-[50px] mr-[5x] mt-8">
          <h2 className="text-4xl font-bold ">About Me</h2>
          <p className=" text-base lg:text-lg mt-4 ">
          Hello! I’m Sreynit, a passionate front-end developer who loves crafting clean, 
          responsive, and dynamic web interfaces. I specialize in using modern technologies 
          like Bootstrap, Tailwind CSS, React, and Next.js to create engaging and user-friendly 
          websites. With a strong eye for design and experience using Figma, I focus on delivering
           seamless user experiences. I also have a solid understanding of backend and database
            tools like PostgreSQL, MySQL, MongoDB, and Strapi, giving me a broader perspective
             on full web development. I’m always eager to learn, grow, and build innovative
              projects that make a real impact
          </p>
          <div className="flex items-center flex-row mt-16 space-x-5">
            <div>
              <a
                href="https://github.com/Chansreynit6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-[40px] h-[40px] " />
              </a>
            </div>
            <div>
              <a
                href="https://t.me/Sreynitngoun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="w-[40px] h-[40px]" />
              </a>
            </div>
            <FaPhoneAlt className="w-[40px] h-[35px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
