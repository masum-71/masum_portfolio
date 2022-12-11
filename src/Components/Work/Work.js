import React from "react";
import { FaArrowRight } from "react-icons/fa";
import reader from "../../images/projects/readersHub/reader.png";
import tech from "../../images/projects/tech/tech.png";
import photography from "../../images/projects/photography/photography.png";

const Work = () => {
  return (
    <div id="work" className="py-20">
      <h3 className="text-[#CCD6F6] text-2xl mb-10 underline">
        Some Of My Works
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9">
        <div className="bg-[#112240] p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <a
            href="https://readers-hub-5e5ab.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rounded-lg mb-5" src={reader} alt="" />
            <div>
              <p className="text-3xl text-[#CCD6F6] mb-3">Reader's Hub</p>
              <p className="flex items-center text-[#8892B0] mb-3">
                {" "}
                <FaArrowRight className="mr-2"></FaArrowRight>
                This is a used book resale website, where buyers, sellers, and
                admin roles are different and their routes are different too.
              </p>
              <p className="flex items-center text-[#8892B0] mb-10">
                <FaArrowRight className="mr-2"></FaArrowRight> A seller can add
                products and delete his/her added product, admin can delete
                users.
              </p>
              <p className="flex items-center text-[#54617F] mb-10">
                <FaArrowRight className="mr-2"></FaArrowRight> Used technology:
                Tailwind । React.js। Firebase । Express । Node.js । MongoDB
              </p>
            </div>
          </a>
        </div>
        <div className="bg-[#112240] p-5 transition shadow-lg ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <a
            href="https://tech-hero-da85f.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rounded-lg mb-5" src={tech} alt="" />
            <div>
              <p className="text-3xl text-[#CCD6F6] mb-3 hover:text-[#64FFDA]">
                Tech Hero
              </p>
              <p className="flex items-center text-[#8892B0] mb-3">
                {" "}
                <FaArrowRight className="mr-2"></FaArrowRight>
                This is a programming language tutorial website. Without
                registration, nobody can purchase any course.
              </p>
              <p className="flex items-center text-[#8892B0] mb-10">
                <FaArrowRight className="mr-2"></FaArrowRight> I tried to
                implement a dark and light theme.
              </p>
              <p className="flex items-center text-[#54617F] mb-10">
                <FaArrowRight className="mr-2"></FaArrowRight> Used technology:
                React-Bootstrap। React.js। Firebase । Express । react to pdf
              </p>
            </div>
          </a>
        </div>
        <div className="bg-[#112240] p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <a
            href="https://photography-d5719.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="rounded-lg mb-5" src={photography} alt="" />
            <div>
              <p className="text-3xl text-[#CCD6F6] mb-3">M's Photography</p>
              <p className="flex items-center text-[#8892B0] mb-3">
                {" "}
                <FaArrowRight className="mr-2"></FaArrowRight>
                This is a photographer’s website where a client can add and see
                others’ reviews and can delete his/her reviews.
              </p>
              <p className="flex items-center text-[#8892B0] mb-10">
                <FaArrowRight className="mr-2"></FaArrowRight>
                Without login a user can’t drop any reviews.
              </p>
              <p className="flex items-center text-[#54617F] mb-10">
                <FaArrowRight className="mr-2"></FaArrowRight>
                Used technology: Tailwind । React.js। Firebase । Express ।
                MongoDB
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
