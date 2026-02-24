import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const experiences = [
  {
    role: "Software Developer (Open Source)",
    company: "Pouranik (GSSOC-2025)",
    duration: "June 2025",
    details:
      "Pouranik is a digital library platform aimed at providing easy access to educational and cultural resources. It allows users to browse, read, and contribute content digitally, making knowledge more accessible.Contributed to the development and improvement of the Pouranik project as part of GSSoC"
  },
  {
    role: "Public Relation Lead Intern",
    company: "Training & Placement Cell, MITS",
    duration: "June 2025 - Present",
    details:
      "Managed PR activities, coordinated events, and promoted the cell through communication channels.Coordinate with companies, student coordinators, and mentors to ensure smooth communication and event execution.Promote engagement and participation in training sessions, mock interviews, and recruitment drives."
  }
];

const ExpItem = ({ exp, index, scrollYProgress }) => {
  const start = index * 0.35;
  const end = start + 0.25;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const x = useTransform(scrollYProgress, [start, end], [60, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

  return (
   <div className="relative flex items-start gap-2 md:gap-12 py-8 mr-1.5 md:py-10">
      
      {/* Timeline Axis */}
      <div className="relative w-10 flex justify-center">
        
        {/* Dot */}
        <motion.div
          style={{ opacity, scale }}
          className="absolute w-5 h-5 left-[-2.2px] top-12 bg-gray-900 rounded-full z-10"
        />

        {/* Connector */}
        <motion.div
          style={{ opacity }}
          className="absolute top-14 left-[30px] rounded-2xl w-[50px] h-1.5 bg-gray-900"
        />
      </div>

      {/* Card */}
      <motion.div
        style={{ opacity, x, scale }}
        className="bg-[#5F9598] border border-gray-200 rounded-2xl p-10 w-[300px] shadow-lg md:w-[800px] h-max"
      >
        <h3 className="text-2xl font-bold text-gray-900">
          {exp.role}
        </h3>

        <p className="text-lg text-gray-600 mt-4 font-semibold">
          {exp.company} | {exp.duration}
        </p>

        <p className="text-gray-700 mt-4 text-[15px] leading-relaxed">
          {exp.details}
        </p>
      </motion.div>
    </div>
  );
};



const Exp = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".heading", {
    opacity:0.9,
    scale:0.9,
    duration:1.3,
    ease:"power2.out",
    scrollTrigger:{
      trigger:"#exp",
      start:"top 80%",
      once:true,
      toggleActions:"restart none none none"
    }
})
},[])
   
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="exp"
      className="relative w-full bg-[#F3F4F4] pt-12.8 pb-4  flex justify-center"
    >
      <div className="relative max-w-4xl w-full">
        {/* Heading */}
        <h1 className="heading text-8xl font-extrabold text-center mt-7 ">
          EXPERIENCE
        </h1>
        <p className=" text-[15px] font-serif text-center mb-6">
          Early in experience. Strong in skills
        </p>

        {/* Timeline */}
        <div className="relative flex">
          {/* Vertical Line */}
          <div className="relative w-5 flex justify-center">
            <div className="absolute ml-6 top-0 w-[5px] h-full bg-gray-300">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gray-900 origin-top"
              />
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col ">
            {experiences.map((exp, i) => (
              <ExpItem
                key={i}
                exp={exp}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    
      
  );
};

export default Exp;
