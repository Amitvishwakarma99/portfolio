import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const items = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="group fixed z-10 flex h-10 w-full items-center justify-between rounded-lg bg-gray-900 py-7 text-xl shadow-lg">
      <div className="px-3 text-4xl ">
        <span className="pl-4 font-semibold text-cyellow">•Am</span>it
        <div className="fixed left-0 top-14 h-[2px] w-0 rounded-lg bg-yellow-400 duration-[2s] group-hover:w-[100%]"></div>
      </div>

      {/* for big screen */}
      <ul className="hidden gap-8 px-10 sm:flex">
        {items.map((item) => (
          <li
            className="listunderline cursor-pointer 
            text-gray-300 duration-200 hover:scale-105 hover:text-gray-100 active:scale-95 active:text-cyellow "
            key={item.id}
          >
            <Link to={item.link} smooth duration={800}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
      {/* for mobile screeen */}
      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 sm:hidden"
      >
        {nav ? <X size={28} /> : <Menu size={28} />}
      </div>

      {nav && (
        <ul className="absolute right-0 top-0 flex h-auto w-1/2 flex-col items-center justify-center gap-2 overflow-hidden rounded-lg bg-slate-800 pb-10 pt-16 text-2xl shadow-md shadow-gray-700 ">
          {items.map((item) => (
            <li className=" duration-300 active:underline cursor-pointer active:scale-95 active:text-cyellow" key={item.id}>
              <Link
                to={item.link}
                onClick={() => setNav(!nav)}
                smooth
                duration={800}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
