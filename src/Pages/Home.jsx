import React from "react";
import CharacterAnimation from "../Components/CharacterAnimation.jsx";
import '../index.css';
import Navbar from "../Components/Navbar.jsx";
import animationVideo from "../assets/animationVideo.mp4";

const Home = () => {
  return (
    <section id="home" >


    <div className="home ">
      <div className="marquee">
        <h1>
          <b>WEL</b>
          <span className="stroke">COME</span>
          <b> TO MY </b>
          <span className="stroke"><i>PORTFOLIO</i></span>
        </h1>
      </div>

     {/* Desktop / Laptop
<div className="hidden md:block">
</div> */}
  <CharacterAnimation />

{/* Mobile */}
{/* <div className="block md:hidden">
  <video
    src={animationVideo}
    autoPlay
    loop
    muted
    playsInline
  />
</div> */}
      <Navbar/>
{/* Intro Section */}
<div className="intro-section">
  <div className="intro-left">
    <p>
      I am Shekhar Tayde, a passionate Web Developer focused on building modern,
      scalable web applications.
    </p>
  </div>

  <div className="intro-right">
    <p>
      私はシェカール・タイデです。モダンでスケーラブルな アプリケーションの構築に注力している、情熱的な デベロッパーです。
    </p>
  </div>
</div>



    </div>
    </section>
  );
};

export default Home;
