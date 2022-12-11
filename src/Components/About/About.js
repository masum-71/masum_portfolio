import React from "react";
import profile from "../../images/profile.png";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-20">
      <h4 className="text-[#CCD6F6] text-2xl mb-10 underline">About Me</h4>
      <div className="md:grid md:grid-cols-2 gap-10">
        <div className="mb-10">
          <p className="text-[#8892B0] mb-5">
            Hello! My name is Masum Billah and I enjoy creating websites. This
            was my dream to be a full-stack web developer, so I start learning
            development on my own but that was a tough journey. Then I completed
            an online course by programming hero, which gives me a great
            understanding of web development. Since then I build a lot of
            websites, Now I am confident about creating things that live on the
            internet.
          </p>
          <p className="text-[#8892B0] mb-5">
            Here are a few technologies I have been working with recently:{" "}
          </p>
          <div className="text-[#8892B0] grid grid-cols-2">
            <p className="flex items-center mb-2">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight> HTML
            </p>
            <p className="flex items-center mb-2">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight> CSS
            </p>
            <p className="flex items-center mb-2">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight>{" "}
              Bootstrap
            </p>
            <p className="flex items-center mb-2">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight>{" "}
              Tailwind
            </p>
            <p className="flex items-center mb-2">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight>{" "}
              JavaScript
            </p>
            <p className="flex items-center mb-2">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight>{" "}
              React.js
            </p>
            <p className="flex items-center mb-2">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight>{" "}
              Node.js
            </p>
            <p className="flex items-center">
              <FaArrowRight className="mr-2 text-[#64FFDA]"></FaArrowRight>{" "}
              Mongodb
            </p>
          </div>
        </div>
        <div className="w-96">
          <img className="w-full rounded-3xl" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
