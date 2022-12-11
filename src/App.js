import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";
import Contact from "./Components/Contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="body">
      <Navbar></Navbar>
      <div className="md:px-16">
        <Header></Header>
        <About></About>
        <Work></Work>
        <Contact></Contact>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
