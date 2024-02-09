import React from "react";

function About() {
  return (
    <div
      name="About"
      className="w-full bg-gradient-to-b from-gray-800 via-slate-800 to-gray-900 py-10"
    >
      <div className="mx-auto flex  max-w-full flex-col items-center justify-center gap-3  lg:max-w-5xl">
        <div className="group text-4xl sm:text-6xl ">
          <span className="font-semibold text-cyellow duration-300 group-hover:mr-4">
            About
          </span>{" "}
          Me
        </div>
        <div className="text-center text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempora
          odio labore commodi, consequatur possimus distinctio cupiditate
          voluptate excepturi atque eaque veniam expedita! Dicta atque, minima
          fugiat maxime ducimus nemo! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit hic fugiat labore architecto neque consectetur
          repudiandae ducimus, iure, dolor enim id, sunt doloremque quisquam
          amet ex aliquam quo nemo in.
        </div>
        <div className="text-center text-gray-300">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          placeat atque, eius odit rerum harum, nesciunt eos, quis cum quibusdam
          deserunt. Ducimus obcaecati voluptas est in repellendus a sapiente
          rem!
        </div>
      </div>
    </div>
  );
}

export default About;
