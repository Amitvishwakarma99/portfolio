import React from "react";
import Avatar from "./Avatar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="flex h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-gradient-to-b from-gray-950 via-slate-800 to-gray-800"
    >
      <div className="mx-auto  flex max-w-full flex-row-reverse items-center justify-center sm:flex-row lg:max-w-5xl">
        <div className="group flex w-2/3 flex-col items-center justify-center sm:w-full">
          <h2 className="px-4 text-4xl sm:text-5xl    ">
            I'm a{" "}
            <span className="font-semibold text-cyellow duration-300 group-hover:ml-4">
              Web Developer
            </span>
          </h2>
          <p className=" w-10/12 pt-2 text-gray-300">
            "Dedicated to crafting digital masterpieces, I bring creativity,
            passion, and precision to every project. With a love for coding and
            an eye for detail, I transform ideas into captivating online
            experiences. From sleek designs to seamless functionality, I strive
            to create websites that not only look great but also deliver
            exceptional user experiences."
          </p>
          <Link
            to="Projects"
            smooth
            duration={700}
            className="mt-10 flex cursor-pointer gap-3 rounded-lg bg-gradient-to-r from-cyellow to-corange px-8 py-3 font-semibold text-cwhite shadow-md shadow-amber-700 hover:via-corange hover:to-orange-500 active:scale-95 "
          >
            Projects{" "}
            <span className="font-semibold text-white duration-300 group-hover:rotate-90">
              <ArrowRight size={22} />
            </span>
          </Link>
        </div>
        <div className="w-2/3 sm:w-1/3 ">
          <Avatar />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
