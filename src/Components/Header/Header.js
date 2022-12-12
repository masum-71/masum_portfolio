import React from "react";
import "./Header.css";
import resume from "../../resume/MasumBillah.pdf";

const Header = () => {
  return (
    <div id="home" className="font-mono py-20">
      <p className="text-[#64FFDA] mb-5">Hi, My Name is</p>
      <p className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl text-[#CCD6F6] mb-5 font-serif">
        {/* Masum Billah. */}
        <span className="hover:animate-ping">M</span>
        <span className="hover:animate-ping">a</span>
        <span className="hover:animate-ping">s</span>
        <span className="hover:animate-ping">u</span>
        <span className="hover:animate-ping">m</span>
      </p>
      <p className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl text-[#8892B0] mb-5 font-serif">
        {/* I am a web developer */}
        <span className="hover:animate-ping">I</span>
        <span className="hover:animate-ping"> </span>
        <span className="hover:animate-ping">a</span>
        <span className="hover:animate-ping">m</span>
        <span className="hover:animate-ping"> </span>
        <span className="hover:animate-ping">a</span>
        <span className="hover:animate-ping"> </span>
        <span className="hover:animate-ping">w</span>
        <span className="hover:animate-ping">e</span>
        <span className="hover:animate-ping">b</span>
        <span className="hover:animate-ping"> </span>
        <span className="hover:animate-ping">d</span>
        <span className="hover:animate-ping">e</span>
        <span className="hover:animate-ping">v</span>
        <span className="hover:animate-ping">e</span>
        <span className="hover:animate-ping">l</span>
        <span className="hover:animate-ping">o</span>
        <span className="hover:animate-ping">p</span>
        <span className="hover:animate-ping">e</span>
        <span className="hover:animate-ping">r</span>
      </p>
      <p className="md:w-1/2 text-[#8892B0] mb-5">
        I am a MERN stack web developer. I start learning web development since
        Nov-2021 and I am still learning. Since than I build a lot of projects
        for improving my skills.
      </p>
      <a
        href={resume}
        download
        className="px-3 py-1 text-[#64FFDA] border-2 border-[#64FFDA] hover:bg-[#133040]"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Header;
