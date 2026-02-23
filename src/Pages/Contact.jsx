import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Footer from "../Components/Footer";

const Contact = () => {
  
useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".heading", {
    opacity:0.9,
    scale:0.9,
    duration:1.3,
    ease:"power2.out",
    scrollTrigger:{
      trigger:"#contact",
      start:"top 80%",
      once:true,
      toggleActions:"restart none none none"
    }
  })
}, [])

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full  bg-[#F3F4F4] border border-gray-200 overflow-hidden"
    >
      {/* Foreground Heading */}
      <h1 className="heading absolute top-5 left-1/2 -translate-x-1/2 text-[20vw] font-extrabold  z-20 select-none whitespace-nowrap">
        LETS CONNECT
      </h1>
      {/* Foreground Content */}
      <div className="flex gap-90 justify-center items-center  pt-90">
      {/* image */}
      <div className="h-80 w-80 flex justify-center items-center md:hidden"><img src="contact.png" alt="contactMe" /></div>
        
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-gray-700 text-base mb-8 leading-relaxed">
            Have a question, project idea, or collaboration in mind?  
            I’m always open to discussing new opportunities and meaningful work.
          </p>

          <a
            href="mailto:shekhartayade410@gmail.com?subject=Portfolio%20Contact&body=Hi%20Shekhar,"
            className="text-sm font-semibold tracking-wide underline underline-offset-4 hover:text-gray-600 transition"
          >
            SEND ME AN EMAIL
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-15 text-4xl items-center">
          <a
            href="https://github.com/ShekharGTayde"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shekhar-tayade/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/shekhartayde/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
