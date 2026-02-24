import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Pointer } from "lucide-react";
import React, { useEffect } from "react";

const About = () => {

useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".heading", {
    opacity:0.9,
    scale:0.9,
    duration:1.3,
    ease:"power2.out",
    scrollTrigger:{
      trigger:"#about",
      start:"top 80%",
      once:true,
      toggleActions:"restart none none none"
    }
  })
}, [])

  return (
    <section
      id="about"
      className="relative h-[100vh] w-full bg-[#5F9598] border border-gray-200   px-6 py-14 text-black"
    >
      {/* Heading */}
      <div className="w-full flex flex-col items-center text-center mb-12 ">
        <h1 className="heading text-8xl md:text-7xl font-extrabold ">
          ABOUT ME
        </h1>
        <p className="text-sm md:text-base text-gray-600 font-serif">
          Allow me to introduce myself.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 max-w-6xl mx-auto">
{/* Image Card */}
<div className="perspective flex-shrink-0">
  <div
    className="photo-card cursor-pointer"
    onClick={() => {
      gsap.to(".photo-card", {
        rotateY: "+=180",
        duration: 1,
        ease: "power2.inOut",
      });
    }}
  >
    {/* Front Side */}
    <div className="card-face card-front flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-800">
          It's Me
        </p>
      </div>
    </div>

    {/* Back Side */}
    <div className="card-face card-back">
      <img
        src="./AIPhoto.png"
        alt="Shekhar Tayde"
        className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg"
      />
    </div>
  </div>
</div>



        {/* Text */}
        <div className="text-sm md:text-base leading-relaxed text-gray-800 max-w-3xl">
          <p className="mb-4">
            I’m a <span className="font-semibold">third-year Electronics and Computer Engineering student </span>
            with a strong passion for software development and modern web technologies.
            I enjoy building scalable, user-friendly applications and continuously
            exploring new tools to sharpen my skills.
          </p>

          <p className="mb-4">
            I specialize in the <span className="font-semibold">MERN stack </span>
             (MongoDB, Express.js, React.js, Node.js) and have hands-on experience
            developing real-world projects, including full-stack applications
            and interactive user interfaces. I also actively contribute to
            open-source, including my work in <span className="font-semibold">GSSoC </span> 
             on the <span className="italic">Pouranik</span> digital library project.
          </p>

          <p>
            Beyond coding, I value leadership and collaboration. I’ve served as a
            <span className="font-semibold"> PR Lead at the Training & Placement Cell </span>,
            where I handled communication, coordination, and outreach. Curious by
            nature and driven to learn, I aspire to grow into a
            <span className="font-semibold"> Software Development Engineer </span>
             at a top tech company.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
