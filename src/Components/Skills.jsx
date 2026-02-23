import React, { useEffect } from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
    
  
} from 'react-icons/fa'

import { SiExpress, SiMongodb, SiPostman } from 'react-icons/si'
import { TbBrandThreejs } from 'react-icons/tb'
import { RiTailwindCssFill } from "react-icons/ri";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon:<TbBrandCpp />, name: 'CPP' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
    { icon: <TbBrandThreejs />, name: 'Three.js' },
    { icon: <SiPostman />, name: 'Postman' },
  ]

  // duplicate for infinite scroll illusion
  const repeated = [...skills, ...skills]

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".heading",{
      opacity:0.9,
      scale:0.9,
      duration:1.3,
      ease:"power2.out",
      scrollTrigger:{
     
        start:"top 80%",
        once:true,
        toggleActions:"restart none none none"
      }
    })
  },[])

  return (
    
   

    <div className="w-full h-55 overflow-hidden bg-[#5F9598] rounded-lg py-5 mt-6 mb-6">
      <h2 className="heading text-center text-4xl font-bold ">
        SKILLS
      </h2>
      <p className="text-[15px] font-serif text-center mb-1.2">
          Technologies Powering My Projects
        </p>

      <div className=" relative w-full overflow-x-hidden">
        <div className="skill flex gap-3 ">
          {repeated.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-25 h-25 bg-[#F3F4F4] rounded-lg shadow-md p-1 mt-3 shrink-0"
            >
              <div className="text-5xl text-[#1D546D]">
                {skill.icon}
              </div>
              <p className="text-[12px] mt-1 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Skills
