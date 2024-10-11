"use client"
import React from 'react';

function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cc7b7303-711c-4db0-ae53-db458849051d",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
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
    <section className="flex justify-center items-center p-6 sm:p-12 md:p-16 bg-[#121212] mt-12 border border-white">
      <div className="flex flex-col md:flex-row max-w-screen-xl w-full bg-[#121212] rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-6 sm:p-10 text-center">
          <h1 className="text-4xl md:text-5xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            CONTACT
          </h1>
          <p className="mb-10 text-base md:text-lg text-gray-300 leading-relaxed">
            I’m excited to connect and explore new opportunities! If you have a project idea, need advice, 
            or want to discuss the latest in web development, please reach out using the form below or email me directly. 
            I’ll get back to you as soon as possible!
          </p>
          <ul className="list-none p-0">
            <h3 className="text-lg md:text-xl mb-2">Address</h3>
            <li className="text-white mb-7">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Toul Kork, Phnom Penh, Cambodia
            </li>
            <h3 className="text-lg md:text-xl mb-2">Phone Number</h3>
            <li className="text-white mb-7">
              <i className="fas fa-phone mr-2"></i>
              +885 86 393 830
            </li>
            <h3 className="text-lg md:text-xl mb-2">Email</h3>
            <li className="text-white mb-7">
              <i className="fas fa-envelope mr-2"></i>
              chansreynit.ngoun@gmail.com
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 sm:p-10 text-center flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            CONTACT FORM
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col mb-14">
            <div className="mb-7">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full md:w-11/12 p-4 border border-gray-300 rounded bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-7">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full md:w-11/12 p-4 border border-gray-300 rounded bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-7">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
                className="w-full md:w-11/12 p-4 border border-gray-300 rounded bg-black text-white focus:outline-none resize-none h-40"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white w-full md:w-[515px] py-2 text-lg ml-0 md:ml-6 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-300"
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
