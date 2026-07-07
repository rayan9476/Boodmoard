import "hamburgers/dist/hamburgers.css";
import { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import logo from "../assets/boodmoard-transparent-cropped.png";
export default function Navbar() {
  const navLinks = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [active, setActive] = useState(false);
  return (
    <>
      <header className="fixed z-50 w-full  flex items-center justify-start lg:justify-between  gap-10 lg:gap-0 px-2 lg:px-4 xl:px-8 py-4 bg-[#000] ">
        <div className="hamburgers lg:hidden">
          <button
            className={`hamburger !p-0 cursor-pointer hamburger--slider ${isMenuOpen ? "is-active" : ""}`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="hamburger-box !w-0">
              <span className="hamburger-inner !top-[5px] !w-[30px]"></span>
            </span>
          </button>
        </div>

        <div className="logo  w-[200px] flex items-center justify-center ">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="site logo"
          />
        </div>

        <div className="nav-links-and-buttons flex items-center gap-16 2xl:gap-24 3xl:gap-32">
          {/* <div className="nav-links  gap-8 hidden lg:flex">
            <ul className="flex gap-8 text-[#FFFFFF] font-medium text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-[#4CAF4F] transition-colors ease-in duration-200 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div> */}

          {/* <div className="buttons flex gap-4 2xl:gap-6 3xl:gap-8 items-center">
            <button
              onClick={() => setActive(!active)}
              className={`login text-sm lg:text-base xl:text-lg 2xl:text-xl 3xl:text-2xl    
          ${active ? "text-[#FFFFFF]" : "text-[#4CAF4F]"}
          hover:text-[#FFFFFF] transition-colors ease-in duration-200 cursor-pointer
          
          `}
            >
              Login
            </button>
            <button className="signup text-sm lg:text-base py-2  px-4 2xl:px-6 3xl:py-3 3xl:px-8 xl:text-lg 2xl:text-xl 3xl:text-2xl bg-[#4CAF4F] hover:bg-[#43A047] rounded-[10px] 2xl:rounded-xl  3xl:rounded-[14px] text-[#FFFFFF]  select-none touch-manipulation active:scale-95 active:bg-[#388E3C] transition-colors ease-in duration-200 cursor-pointer">
              Sign Up
            </button>
          </div> */}
        </div>
      </header>

      {/* <NavbarMenu isMenuOpen={isMenuOpen} navLinks={navLinks} /> */}
    </>
  );
}
