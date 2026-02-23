import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import education from "../assets/education.jpg";

const Edu = () => {
  const eduWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const eduWrapper = eduWrapperRef.current;
    const slices = eduWrapper.querySelectorAll(".edu-slice");
    const cardsContainer = eduWrapper.querySelector(".edu-cards");
    const cards = eduWrapper.querySelectorAll(".edu-card");

    gsap.to(".heading", {
      opacity: 0.9,
      scale: 0.9,
      duration: 1.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#edu",
        start: "top 80%",
        once: true,
        toggleActions: "restart none none none"
      }
    })

    // Get tallest card height and set wrapper height
    let maxCardHeight = 0;
    cards.forEach((card) => {
      const h = card.offsetHeight;
      if (h > maxCardHeight) maxCardHeight = h;
    });
    eduWrapper.style.height = `${maxCardHeight}px`;
    eduWrapper.style.position = "relative";
    eduWrapper.style.overflow = "hidden";
    eduWrapper.style.perspective = "1500px";

    // Set slices initial state
    gsap.set(slices, {
      position: "absolute",
      top: 0,
      left: (i) => `${i * 33.33}%`,
      width: "33.33%",
      height: "100%",
      backfaceVisibility: "hidden",
      transformOrigin: "center center",
    });

    // Set cards container (flex with gap, hidden initially)
    gsap.set(cardsContainer, {
      display: "flex",
      gap: "1.5rem",
      justifyContent: "space-around",
      opacity: 0,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    });

    // Set individual cards behind slices
    gsap.set(cards, {
      rotateY: 0,
      opacity: 1,
      flex: "1 1 0",
    });

    // Timeline triggered when section appears
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#edu",
        start: "top 70%",
        once: true,
      },
    });

    // 1️⃣ Slightly split slices apart
    tl.to(slices, {
      x: (i) => (i === 0 ? "-8%" : i === 2 ? "8%" : "0%"),
      duration: 2,
      ease: "power2.out",
    })
      // 2️⃣ Flip slices in place
      .to(
        slices,
        {
          rotateY: 180,
          stagger: 0.2,
          duration: 0.9,
          ease: "power2.inOut",
        },
        "-=0.2"
      )
      // 3️⃣ Reveal cards container with gap
      .to(
        cardsContainer,
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section
      id="edu"
      className="relative w-full bg-[#5F9598] py-12 flex flex-col justify-center items-center text-black"
    >
      <h1 className="heading text-8xl font-extrabold text-center">EDUCATION</h1>
      <p className="text-[15px] font-serif text-center mb-10">
        Building Knowledge Step by Step
      </p>

      {/* Image slices container */}
      <div className="edu-wrapper w-[80%]" ref={eduWrapperRef}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="edu-slice rounded-xl"
            style={{
              backgroundImage: `url(${education})`,
              backgroundSize: "300% 100%",
              backgroundPosition: `${i * 50}% center`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}

        {/* Cards container behind slices */}
        <div className="edu-cards">
          <div className="edu-card h-100 shadow-lg rounded-2xl bg-[#F3F4F4] border-gray-200 flex flex-col justify-center gap-3 p-5">
            <h3 className="text-xl font-bold mt-4">
              Bachelor of Technology (B.TECH) - ECE
            </h3>
            <p className="text-lg font-base">Maharashtra Institute of Technology</p>
            <p className="text-lg font-base">2023-2027 | CSN , MH</p>
            <p className="text-md">
              Currently pursuing B.Tech in Electronics & Computer Engineering,
              gaining strong foundation in core electronics & CS disciplines.
            </p>
            <p className="text-md">CGPA: 8.31</p>
          </div>

          <div className="edu-card h-100 shadow-lg rounded-2xl bg-[#F3F4F4] border-gray-200 flex flex-col justify-center gap-3 p-5">
            <h3 className="text-xl font-semibold -mt-10">MERN Stack Web Development</h3>
            <p className="text-lg font-medium">Physics Wallah</p>
            <p className="text-lg">2022-2023</p>
            <p className="text-md">
              Completed comprehensive MERN Stack training, building real-world
              projects with MongoDB, Express, React & Node.js.
            </p>
          </div>

          <div className="edu-card h-100 shadow-lg rounded-2xl bg-[#F3F4F4] border-gray-200 flex flex-col justify-center gap-3 p-5">
            <h3 className="text-xl font-semibold -mt-6">
              12th HSC – Science Stream (Maharashtra State Board)
            </h3>
            <p className="text-lg font-medium">Vivekanand College</p>
            <p className="text-lg">2021-2022 | CSN , MH</p>
            <p className="text-md">
              Completed Higher Secondary Certificate in Science stream, strong
              foundation in Physics, Chemistry, Maths.
            </p>
            <p className="text-md">GPA: 75%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edu;
