import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialNav from "./components/SocialNav";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="w-full overflow-auto bg-gray-800 text-cwhite">
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Skills/>
       <Contact/>
        <SocialNav />
      </div>
    </>
  );
};

export default App;
