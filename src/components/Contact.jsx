import React from "react";
import { links } from "./SocialNav";
import { Linkedin, Twitter, Github, FileText, Mail } from "lucide-react";

function Contact() {
  return (
    <div
      name="Contact"
      className="mb-20 w-full bg-gradient-to-b from-gray-900 via-slate-800 to-gray-800 py-10 "
    >
      <div className="mx-auto flex  max-w-full flex-col items-center justify-center gap-3  lg:max-w-5xl">
        <div>
          <div className="group text-4xl sm:text-6xl">
            <span className="font-semibold text-cyellow duration-300 group-hover:mr-4">
              Contact{" "}
            </span>
            Me
          </div>
        </div>
        <p className="mx-2 pb-4 text-center  text-gray-300">
          {" "}
          You can find all my social media links below for a quick chat or
          connect with me via email using the form provided. I'm just a message
          away, so don't hesitate to reach out!
        </p>
        <div className="flex w-full flex-col items-center  sm:flex-row sm:justify-around ">
          <div className="pb-4">
            <p className="py-4 text-center text-2xl font-semibold text-cwhite">
              Links
            </p>

            <ul className=" flex flex-col items-center justify-center gap-4  px-10">
              {links.map((link) => (
                <a
                  href={link.href}
                  className="listunderline flex cursor-pointer gap-2 
            text-gray-300 duration-200  hover:scale-105 hover:text-gray-100 active:scale-95 active:text-cyellow"
                  key={link.id}
                  target="_blank"
                >
                  • {link.child}
                </a>
              ))}
            </ul>
          </div>
          <form
            action="https://formspree.io/f/myyreavq"
            className="flex flex-col items-center justify-center gap-4"
            method="POST"
            onSubmit={(e) => {
              preventDefault();
            }}
          >
            <p className="pb-2 pt-4 text-center text-2xl font-semibold text-cwhite">
              Get in touch
            </p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              className="w-full rounded-md border-2 bg-transparent p-2 text-cwhite focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="w-full rounded-md border-2 bg-transparent p-2 text-cwhite focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              cols="50"
              rows="5"
              placeholder="Enter your message..."
              className="w-full rounded-md border-2 bg-transparent p-2 text-cwhite focus:outline-none"
            ></textarea>
            <button
              className=" my-2 w-full rounded-lg bg-gradient-to-r 
         from-cyellow to-orange-500 py-3 font-semibold text-cwhite shadow-md shadow-amber-700 duration-200 hover:from-orange-400 hover:to-orange-400 active:scale-95"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
