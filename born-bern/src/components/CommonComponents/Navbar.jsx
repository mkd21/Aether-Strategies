import { useState } from "react";
import { Menu, X } from "lucide-react"; // or any icon library

import Logo from "../../assets/logo1.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-gray-500 bg-white fixed w-full z-20 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Logo */}
          <div
            className="rounded-full bg-white flex items-center justify-center overflow-hidden
              xs:w-[3rem] xs:h-[3rem]  "
          >
            <a href="#" alt="company logo">
              <img
                src={Logo}
                alt="brand logo"
                className="h-full w-full object-contain py-2"
              />
            </a>
          </div>
          <div className="relative">
            {/* Hamburger (mobile) */}
            <button
              className="lg:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Nav Links */}
            <div
              className={`
                xs:left-[-18.3rem] xs:top-[4rem] xs:w-[21rem]
                xs390:w-[23.3rem] xs390:left-[-20.5rem]
                xs430:left-[-22.5rem] xs430:w-[25rem]
                lg:ml-[14rem] lg:flex lg:items-center lg:justify-end xl:w-[57rem]
                2xl:w-[65rem] 2xl:ms-0 2xl:ps-[6rem]
                ${open ? "block" : "hidden"}
                lg:static absolute left-0 right-0 top-full
                bg-white z-50
              `}
            >
              <ul className="text-center flex flex-col lg:flex-row lg:gap-12 gap-0 lg:w-full xl:font-[600] w-auto text-sm">
                {[
                  { label: "Home", id: "home" },
                  { label: "About Us", id: "about-us" },
                  { label: "Our Process", id: "our-process" },
                  { label: "Who We Work With", id: "who-we-work-with" },
                  { label: "Founder", id: "founder" },
                  { label: "Get Started", id: "get-started" },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="lg:bg-transparent  hover:text-red-600 cursor-pointer px-4 py-3 block"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
