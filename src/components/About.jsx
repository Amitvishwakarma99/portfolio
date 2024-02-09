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
        <div className="mx-2 text-center text-gray-300">
          Hey there! I'm Amit Vishwakarma, a passionate web developer who
          thrives on crafting awesome web pages. As a postgraduate with a
          Masters in Computer Application (MCA), I've honed my expertise in the
          field. My coding journey revolves around HTML, CSS, and JavaScript,
          and I've also delved into exciting tools like React JS, Tailwind CSS,
          and Node JS with Express JS. Whether it's designing sleek interfaces
          or adding interactive features, I find joy in bringing ideas to life
          in the digital space.
        </div>
        <div className="mx-2 text-center text-gray-300">
          {" "}
          You'll often find me immersed in my coding zone, fingers dancing
          across the keyboard in VS Code, transforming concepts into reality one
          line of code at a time. But it's not just about the technical
          aspects—I believe in the power of user experience. Crafting intuitive
          designs and ensuring seamless navigation are my secret ingredients for
          creating impactful web solutions.
        </div>
        <div className="mx-2 text-center text-gray-300">
          {" "}
          Learning is my compass, and I firmly believe in taking the reins to
          teach myself new skills. Challenges fuel my growth, and I relish
          pushing my boundaries independently. Beyond the screen, I find solace
          in music—I strum my guitar and sing to unwind. Fluent in both Hindi
          and English, I cherish connecting with people from diverse backgrounds
          and cultures. For me, web development isn't just a job; it's a
          creative outlet and a way to make a positive impact in the vast
          digital realm.
        </div>
      </div>
    </div>
  );
}

export default About;
