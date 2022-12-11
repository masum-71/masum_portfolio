import React from "react";
import resume from "../../resume/MasumBillah.pdf";

const Header = () => {
  return (
    <div className="font-mono py-20">
      <p className="text-[#64FFDA] mb-5">Hi, My Name is</p>
      <p className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl text-[#CCD6F6] mb-5 font-serif">
        Masum Billah.
      </p>
      <p className="lg:text-7xl md:text-5xl sm:text-3xl text-2xl text-[#8892B0] mb-5 font-serif">
        I am a web developer
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
