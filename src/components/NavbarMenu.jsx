import { useState } from "react";

export default function NavbarMenu({ isMenuOpen, navLinks }) {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-[#F5F7FA] z-40
    transition-transform duration-500 ease-in-out
    ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="nav-menu px-2 pt-32">
        <ul className="flex flex-col gap-8 text-[#18191F] font-medium text-lg">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`cursor-pointer transition-colors duration-200 ease-in  ${
                activeLink === index ? "text-[#4CAF4F]" : "text-[#18191F]"
              } hover:text-[#4CAF4F]`}
              onClick={() => setActiveLink(index)}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
