import React from 'react';

function Contact() {
  return (
    <section className="flex justify-center items-center p-16 bg-[#121212] mt-12">
      <div className="flex max-w-screen-xl w-full bg-[#121212] rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-10 text-center  ">
          <h1 className="text-5xl mb-5 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 ">CONTACT</h1>
          <p className="mb-10 text-lg text-gray-300 leading-relaxed">
            I’m excited to connect and explore new opportunities! If you have a project idea, need advice,
            or want to discuss the latest in web development, please reach out using the form below or email me directly.
            I’ll get back to you as soon as possible!
          </p>
          <ul className="list-none p-0">
            <h3 className="text-xl mb-2">Address</h3>
            <li className="text-white mb-7">
              <i className="fas fa-map-marker-alt mr-2"></i>
              toulkork, Phnom Penh, Cambodia
            </li>
            <h3 className="text-xl mb-2">Phone Number</h3>
            <li className="text-white mb-7">
              <i className="fas fa-phone mr-2"></i>
              +885 86 393 830
            </li>
            <h3 className="text-xl mb-2">Email</h3>
            <li className="text-white mb-7">
              <i className="fas fa-envelope mr-2"></i>
              chansreynit.ngoun@gmail.com
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-10 text-center flex flex-col justify-center">
          <h1 className="text-5xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">CONTACT FORM</h1>
          <form action="#" method="post" className="flex flex-col mb-14">
            <div className="mb-7">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-11/12 p-4 border border-gray-300 rounded bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-7">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-11/12 p-4 border border-gray-300 rounded bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-7">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
                className="w-11/12 p-4 border border-gray-300 rounded bg-black text-white focus:outline-none resize-none h-40"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-black w-[515px] ml- py-2 rounded-lg text-lg cursor-pointer transition duration-300 hover:bg-gray-300"
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
