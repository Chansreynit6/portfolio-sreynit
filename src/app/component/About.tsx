import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

function About() {
  return (
    <section>
      <div className=" text-white md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 mr-10">
        <Image
          src="/aboutme.jpg"
          width={350}
          height={100}
          alt="About Image"
          className="sm:ml-[80px] rounded-lg mr-[80px] mt-8 "
        />

        <div className=" sm:mr-[50px] mr-[5x] mt-8">
          <h2 className="text-4xl font-bold ">About Me</h2>
          <p className=" text-base lg:text-lg mt-4 ">
            Hello! I’m Sreynit, a passionate front-end developer with a knack
            for creating clean and responsive web interfaces. With a solid
            foundation in HTML, CSS, and JavaScript, I thrive on using modern
            frameworks like React to build dynamic and user-friendly
            applications. My goal is to deliver exceptional user experiences
            while continuously learning and expanding my skill set in the
            ever-evolving tech landscape. When I’m not coding, I enjoy exploring
            new technologies and staying updated with the latest industry
            trends. I’m excited to connect and collaborate on innovative
            projects that make a difference!
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
                href="https://www.facebook.com/zey.nit.524?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-[40px] h-[40px]" />
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
