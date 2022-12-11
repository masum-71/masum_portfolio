import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="body">
      <Navbar></Navbar>
      <div className="px-16">
        <Header></Header>
        <About></About>
        <Work></Work>
      </div>
    </div>
  );
}

export default App;
