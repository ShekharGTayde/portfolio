import "../index.css";
import React from "react";
import { FileText } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="floating-navbar  ">
      <a href="./resume.pdf" className="icon-btn" title="Download Resume">
        <FileText size={25} />
      </a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#exp">Exp</a></li>
        <li><a href="#edu">Edu</a></li>
        <li><a href="#cert">Cert</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
