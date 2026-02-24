import React, { useEffect } from "react";
import rideIcon from "../assets/rideIcon.png";
import AppleWeb from "../assets/AppleWeb.png";
import LailaIcon from "../assets/LailaIcon.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Work = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".heading", {
        opacity: 0,
        scale: 0.9,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#work",
          start: "top 75%",
          once: true,
          toggleActions: "restart none none none"
        },
      });
    });

    return () => ctx.revert();
  }, []);




  return (
    <section
      id="work"
      className="w-full min-h-screen bg-[#5F9598] flex flex-col items-center px-2.4"
    >

      <h1 className="heading text-8xl font-extrabold text-center mt-10">WORK</h1>
      <p className="text-[15px] font-serif text-center mb-10">
        Showcasing My Creations
      </p>


      {/* yatrii Card */}
      <div className="relative  max-w-6xl w-[80%] h-100 mx-auto rounded-3xl bg-[#F3F4F4] shadow-xl
       border-gray-200 mb-12 flex overflow-visible">

        {/* Floating Image */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 ">
          <img
            src={rideIcon}
            alt="Yatrii App"
            className="w-64 rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="ml-64 p-8 flex flex-col justify-center shadow-lg">
          <h2 className="text-4xl font-extrabold mb-2">YATRII</h2>

          <ul className="text-gray-600 text-base space-y-2 mb-4 list-disc">
            <li>Built a full-stack MERN ride booking platform focused on scalability.</li>
            <li>Integrated Razorpay for secure ride payments.</li>
            <li>Implemented real-time ride updates using Socket.IO.</li>
            <li>Built a clean RESTful backend with Node.js and Express for managing users, rides, and payments.</li>
            <li>Designed a responsive and interactive UI, enhanced with 3D libraries for better user engagement.</li>
          </ul>

          <p className="text-lg font-semibold text-gray-700 mb-4">
            REACT · NODE · EXPRESS · MONGODB · RAZORPAY · THREEJS · GSAP · SOCKET.IO
          </p>

          <div className="flex gap-4 text-4xl text-black mt-2">
            <a
              href="https://github.com/ShekharGTayde/yatrii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-links-fill"></i>
            </a>
          </div>


        </div>
      </div>




      {/* Apple Clone Card */}
      <div className="relative  max-w-6xl w-[80%] h-100 mx-auto rounded-3xl bg-[#F3F4F4] shadow-xl border-gray-200 mb-12 flex overflow-visible">

        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14">
          <img
            src={AppleWeb}
            alt="Apple Website Clone"
            className="w-64 rounded-2xl shadow-lg"
          />
        </div>

        <div className="ml-64 p-8 flex flex-col justify-center shadow-lg">
          <h2 className="text-4xl font-extrabold mb-2">
            APPLE WEBSITE CLONE
          </h2>

          <ul className="text-gray-600 text-base space-y-2 mb-4 list-disc">
            <li>Built a pixel-perfect Apple website clone.</li>
            <li>Integrated 3D components and smooth animations.</li>
            <li>Optimized for responsiveness and performance.</li>
            <li>Designed a fully responsive layout optimized for desktop, tablet, and mobile devices.</li>
            <li>Structured reusable components to ensure clean, maintainable, and performant frontend code.</li>
          </ul>

          <p className="text-lg font-semibold text-gray-700 mb-4">
            REACT · THREEJS · GSAP
          </p>

          <div className="flex gap-4 text-4xl">
            <a href="https://github.com/ShekharGTayde/iphone.com" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://iphone-com-hazel.vercel.app/" target="_blank">
              <i className="ri-links-fill"></i>
            </a>
          </div>
        </div>
      </div>




      {/* Laila Card */}
      <div className="relative max-w-6xl w-[80%] h-100 mx-auto rounded-3xl bg-[#F3F4F4] shadow-xl border-gray-200 mb-12 flex overflow-visible">

        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14">
          <img
            src={LailaIcon}
            alt="Laila Virtual Assistant"
            className="w-64 rounded-2xl shadow-lg"
          />
        </div>

        <div className="ml-64 p-8 flex flex-col justify-center shadow-lg">
          <h2 className="text-4xl font-extrabold mb-2">
            LAILA VIRTUAL ASSISTANT
          </h2>

          <ul className="text-gray-600 text-base space-y-2 mb-4 list-disc">
            <li>Developed a browser-based virtual assistant using JavaScript Speech Synthesis API for voice output.</li>
            <li>Implemented basic command recognition to respond to predefined user queries.</li>
            <li>Used Web APIs to demonstrate text-to-speech functionality in modern browsers.</li>
            <li>Designed a simple and lightweight UI focused on learning voice interaction concepts.</li>
            <li>Gained hands-on experience with JavaScript event handling and DOM manipulation.</li>
          </ul>

          <p className="text-lg font-semibold text-gray-700 mb-4">
            HTML · CSS · JAVASCRIPT
          </p>

          <div className="flex gap-4 text-4xl">
            <a href="https://github.com/ShekharGTayde/Laila-VirtualAssistant.git" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://shekhargtayde.github.io/Laila-VirtualAssistant/" target="_blank">
              <i className="ri-links-fill"></i>
            </a>
          </div>
        </div>
      </div>







    </section>

  );
};

export default Work;
