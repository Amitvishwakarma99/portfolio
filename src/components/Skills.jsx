import React from "react";
import cssimg from "../assets/cssimg.png";
import expressjsimg from "../assets/expressjsimg.png";
import htmlimg from "../assets/htmlimg.png";
import jsimg from "../assets/jsimg.png";
import nodejsimg from "../assets/nodejsimg.png";
import reactjsimg from "../assets/reactjsimg.png";
import tailwindcssimg from "../assets/tailwindcssimg.png";
function Skills() {
  const skills = [
    { id: 1, src: htmlimg, title: "HTML", style: " shadow-orange-600" },
    { id: 2, src: cssimg, title: "CSS", style: " shadow-sky-600" },
    { id: 3, src: jsimg, title: "JavaScript", style: " shadow-yellow-300" },
    { id: 4, src: reactjsimg, title: "ReactJs", style: " shadow-cyan-400" },
    {
      id: 5,
      src: tailwindcssimg,
      title: "Tailwind",
      style: "  shadow-teal-500",
    },
    {
      id: 6,
      src: expressjsimg,
      title: "ExpressJS",
      style: "  shadow-white",
      bgstyle: " bg-white rounded-full",
    },
    { id: 7, src: nodejsimg, title: "NodeJs", style: " shadow-green-600" },
  ];
  return (
    <div
      name="Skills"
      className="w-full bg-gradient-to-b from-gray-800 via-slate-900 to-gray-900 py-10 "
    >
      <div className="mx-auto flex  max-w-full flex-col items-center justify-center gap-3  lg:max-w-5xl">
        <div>
          <div className="group text-4xl sm:text-6xl">
            <span className="font-semibold text-cyellow duration-300 group-hover:mr-4">
              Ski
            </span>
            lls
          </div>
        </div>
        <p className="text-center text-gray-300">
          Skills that i know and i have worked with
        </p>
        <div className="grid w-full grid-cols-2 gap-16 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {skills.map(({ id, src, title, style, bgstyle }) => (
            <div
              key={id}
              className={
                "rounded-lg py-2 text-gray-200 shadow-md duration-200 hover:scale-[0.95]" +
                style
              }
            >
              <img src={src} alt="" className={"mx-auto w-20 " + bgstyle} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
