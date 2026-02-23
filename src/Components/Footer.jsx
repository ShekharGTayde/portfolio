import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="flex  h-10 w-full bg-[#5F9598] text-[#061E29] items-center justify-center gap-155 md:mt-31">
        <p>COPYRIGHT @ 2026</p>

        <p>
          DESIGN AND DEVELOPMENT BY{" "}
          <a
            href="https://github.com/ShekharGTayde"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-white"
          >
            SHEKHAR TAYDE
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
