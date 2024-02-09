import React from "react";
import weatherapp from "../assets/weatherapp.png";
import todoapp from "../assets/todoapp.png";
import portfolio from "../assets/portfolio.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title1: "Weather",
      title2: " App",
      image: weatherapp,
      skills: "HTML, CSS, JavaScript",
      demo: "https://weatheramt.netlify.app/",
      github: "https://github.com/Amitvishwakarma99/weather_app",
    },
    {
      id: 2,
      title1: "ToDo",
      title2: " App",
      image: todoapp,
      skills: "ReactJS, Tailwind CSS",
      demo: "https://todolosto.netlify.app/",
      github: "https://github.com/Amitvishwakarma99/todo",
    },
    {
      id: 3,
      title1: "Port",
      title2: "folio",
      image: portfolio,
      skills: "ReactJS, Tailwind CSS",
      demo: "https://amitv.netlify.app/",
      github: "https://github.com/Amitvishwakarma99/portfolio",
    },
  ];
  return (
    <div
      name="Projects"
      className="w-full  bg-gradient-to-b  from-gray-900 via-slate-900 to-gray-800 py-10 "
    >
      <div className=" mx-auto flex  max-w-full flex-col items-center justify-center gap-3  lg:max-w-5xl">
        <div>
          <div className="group py-2 text-4xl sm:text-6xl">
            <span className="font-semibold text-cyellow duration-300 group-hover:mr-4">
              Pro
            </span>
            jects
          </div>
        </div>
        <p className="mx-2 pb-4 text-center text-gray-300">
          Below are some of the projects I've worked on, showcasing my skills
          and creativity in web development. Each project represents a unique
          challenge and a chance to innovate. Take a look and explore the
          digital world I've crafted!
        </p>
        <div className="grid   gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="listunderline  flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-900 px-2 py-2 shadow-md shadow-[#fffc5425] duration-200 hover:scale-[0.98]"
            >
              <p className="py-2 text-xl font-semibold text-cyellow ">
                {project.title1}
                <span className="text-cwhite ">{project.title2}</span>
              </p>
              <img
                src={project.image}
                alt=""
                className=" rounded-lg duration-200 "
              />
              <div className="my-2 flex w-full justify-center rounded-md border-2 border-gray-800 py-2 sm:text-sm">
                {project.skills}
              </div>
              <div className="flex w-full justify-evenly  py-1 sm:text-sm">
                <a
                  href={project.demo}
                  className="rounded-lg bg-gradient-to-r from-cyellow to-orange-500 px-8  py-2 font-semibold text-cwhite shadow-md shadow-amber-700 hover:from-orange-400 hover:to-orange-400 active:scale-95"
                  target="_blank"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  className="rounded-lg  bg-gradient-to-r from-cyellow to-orange-500 px-8  py-2 font-semibold text-cwhite shadow-md shadow-amber-700 hover:from-orange-400 hover:to-orange-400 active:scale-95"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
