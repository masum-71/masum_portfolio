import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import line from "../src/images/line.png";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="body overflow-hidden">
      <Navbar></Navbar>
      <div className="md:px-16 relative">
        <Header></Header>
        <About></About>
        <Work></Work>
        <Contact></Contact>
        <Toaster></Toaster>

        <div className=" md:hidden lg:block">
          <div>
            <a
              className="text-[#64FFDA] vertical-r"
              href="mailto:masum.monpura@gmail.com"
            >
              masum.monpura@gmail.com
            </a>
            <img className="line-r" src={line} alt="" />
          </div>
          <div>
            <ul className="vertical-l">
              <li className="text-[#CCD6F6] hover:text-[#64FFDA] mb-5 text-2xl">
                <a
                  href="https://github.com/masum-71"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub></FaGithub>
                </a>
              </li>
              <li className="text-[#CCD6F6] hover:text-[#64FFDA] mb-5 text-2xl">
                <a
                  href="https://www.linkedin.com/in/masumbillah71/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </li>
              <li className="text-[#CCD6F6] hover:text-[#64FFDA] mb-5 text-2xl">
                <a
                  href="https://www.facebook.com/Masum.1971/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li className="text-[#CCD6F6] hover:text-[#64FFDA] mb-5 text-2xl">
                <a
                  href="https://twitter.com/masumbillah_71"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter></FaTwitter>
                </a>
              </li>
            </ul>
            <img className="line-l" src={line} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
