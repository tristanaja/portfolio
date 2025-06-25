import React, { useState } from "react";

function Navbar() {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="bg-[#2E2E2E] w-fit px-[16px] py-[8px] rounded-[4px] transition-transform duration-300 ease-in-out hover:scale-105">
        <a
          href="#"
          className="font-jetbrainmono text-[14px] text-[#f8f8f8] transition-colors duration-300 ease-in-out hover:text-[#cfcfcf]"
        >
          Tristan <span className="text-[14px] leading-[1.2]">☘︎</span>
        </a>
      </div>
      <div className="flex flex-row gap-2">
        <a
          href="#about"
          className="relative inline-block px-[20px] py-[10px] text-center font-jetbrainmono group"
        >
          <span className="text-[14px] relative z-10 block text-[#2e2e2e] group-hover:text-[#f8f8f8] transition-transform duration-[150ms] ease-[var(--elastic-ease-out)] transform scale-110 group-hover:scale-100">
            About Me
          </span>
          <span className="absolute inset-0 bg-[#f0f0f0] group-hover:bg-[#2e2e2e] transition-transform duration-[750ms] ease-[var(--elastic-ease-out)] transform scale-100 group-hover:scale-110 rounded-[4px] group-hover:rounded-4xl"></span>
        </a>
        <a
          href="#skills"
          className="relative inline-block px-[20px] py-[10px] text-center font-jetbrainmono group"
        >
          <span className="text-[14px] relative z-10 block text-[#2e2e2e] group-hover:text-[#f8f8f8] transition-transform duration-[150ms] ease-[var(--elastic-ease-out)] transform scale-110 group-hover:scale-100">
            Skills
          </span>
          <span className="absolute inset-0 bg-[#f0f0f0] group-hover:bg-[#2e2e2e] transition-transform duration-[750ms] ease-[var(--elastic-ease-out)] transform scale-100 group-hover:scale-110 rounded-[4px] group-hover:rounded-4xl"></span>
        </a>
        <a
          href="#contact"
          className="relative inline-block px-[20px] py-[10px] text-center font-jetbrainmono group"
        >
          <span className="text-[14px] relative z-10 block text-[#2e2e2e] group-hover:text-[#f8f8f8] transition-transform duration-[150ms] ease-[var(--elastic-ease-out)] transform scale-110 group-hover:scale-100">
            Contact Me
          </span>
          <span className="absolute inset-0 bg-[#f0f0f0] group-hover:bg-[#2e2e2e] transition-transform duration-[750ms] ease-[var(--elastic-ease-out)] transform scale-100 group-hover:scale-110 rounded-[4px] group-hover:rounded-4xl"></span>
        </a>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a
          href="#year"
          className="cursor-not-allowed relative inline-block px-[20px] py-[10px] text-center font-jetbrainmono group"
        >
          <span
            className={`relative z-10 block transition-transform duration-[150ms] ease-[var(--elastic-ease-out)] transform scale-110 group-hover:scale-100 ${isHovered ? "text-[#A6A4A4]" : "text-[#2e2e2e]"}`}
          >
            {isHovered ? (
              currentYear
            ) : (
              <span className="text-[14px]">Year</span>
            )}
          </span>
          <span className="absolute inset-0 bg-[#f0f0f0] group-hover:bg-[#2e2e2e] transition-transform duration-[750ms] ease-[var(--elastic-ease-out)] transform scale-100 group-hover:scale-110 rounded-[4px] group-hover:rounded-4xl"></span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
