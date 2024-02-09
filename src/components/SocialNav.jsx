import React from "react";
import { Linkedin, Twitter, Github, FileText, Mail } from "lucide-react";

const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn
        <Linkedin />
      </>
    ),
    href: "https://www.linkedin.com/in/amit-99-vishwakarma/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub
        <Github />
      </>
    ),
    href: "https://github.com/amitvishwakarma99",
  },
  {
    id: 3,
    child: (
      <>
        Twitter
        <Twitter />
      </>
    ),
    href: "https://x.com/itsamit_v",
  },
  {
    id: 4,
    child: (
      <>
        Mail
        <Mail />
      </>
    ),
    href: "mailto:amit1999vishwakarma@gmail.com",
  },
  {
    id: 5,
    child: (
      <>
        Resume
        <FileText />
      </>
    ),
    href: "../src/assets/resume.pdf",
    style: "rounded-br-md",
    download: true,
  },
];
const SocialNav = () => {
  return (
    <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "ml-[-110px] flex h-12 w-40 items-center justify-between bg-gradient-to-r from-cyellow to-corange px-4 duration-500 hover:ml-[-5px] hover:rounded-md " +
              " " +
              link.style
            }
          >
            <a
              href={link.href}
              className="flex w-full justify-between font-semibold "
              target="_blank"
              download={link.download}
              rel="norefferer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialNav;
export { links };
