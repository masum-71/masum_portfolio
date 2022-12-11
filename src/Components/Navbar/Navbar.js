import React from "react";
import { Link } from "react-scroll";
import resume from "../../resume/MasumBillah.pdf";
const Navbar = () => {
  return (
    <div className="navbar z-10 text-white font-mono fixed top-0 left-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl text-[#64FFDA] font-mono"
        >
          Masum Billah
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-[#64FFDA]">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className="hover:text-[#64FFDA]">
            <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
              Work
            </Link>
          </li>
          <li className="hover:text-[#64FFDA]">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href={resume}
          download
          className="px-3 py-1 text-[#64FFDA] border-2 border-[#64FFDA] hover:bg-[#133040]"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
