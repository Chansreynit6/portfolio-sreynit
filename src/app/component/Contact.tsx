"use client";
import React from "react";

function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cc7b7303-711c-4db0-ae53-db458849051d",
        name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
        email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    } else {
      console.error(result);
    }
  }

  return (
    <section className="flex justify-center items-center p-4 sm:p-6 md:p-16 bg-[#121212] mt-8 sm:mt-12 border border-white">
      <div className="flex flex-col md:flex-row max-w-screen-xl w-full bg-[#121212] rounded-lg overflow-hidden">
       
        <div className="flex-1 p-4 sm:p-6 md:p-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            CONTACT
          </h1>
          <p className="mb-6 md:mb-10 text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
            I am excited to connect and explore new opportunities! If you have a
            project idea, need advice, or want to discuss the latest in web
            development, please reach out using the form below or email me
            directly. I will get back to you as soon as possible!
          </p>
          <ul className="list-none p-0">
            <h3 className="text-base md:text-lg lg:text-xl mb-2">Address</h3>
            <li className="text-white mb-7">
              <i className="fa-solid fa-map-marker-alt mr-2"></i>
              Toul Kork, Phnom Penh, Cambodia
            </li>
            <h3 className="text-base md:text-lg lg:text-xl mb-2">Phone Number</h3>
            <li className="text-white mb-7">
              <i className="fa-solid fa-phone mr-2"></i>
              +855 98 902 37
            </li>
            <h3 className="text-base md:text-lg lg:text-xl mb-2 text-white">Email</h3>
            <li className="text-white mb-7">
              <i className="fa-solid fa-envelope mr-2"></i>
              chansreynit.ngoun@institute.pse.ngo
            </li>
          </ul>
        </div>

        <div className="flex-1 p-4 sm:p-6 md:p-10 text-center flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            CONTACT FORM
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col mb-8 md:mb-14">
            <div className="mb-4 md:mb-7">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full md:w-11/12 p-3 md:p-4 border border-gray-300 rounded bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-4 md:mb-7">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full md:w-11/12 p-3 md:p-4 border border-gray-300 rounded bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-4 md:mb-7">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
                className="w-full md:w-11/12 p-3 md:p-4 border border-gray-300 rounded bg-black text-white focus:outline-none resize-none h-32 md:h-40"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white w-full md:w-[515px] py-2 text-base md:text-lg rounded-lg cursor-pointer transition duration-300 hover:bg-gray-300 md:ml-6"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
