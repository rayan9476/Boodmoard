import "hamburgers/dist/hamburgers.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/boodmoard-transparent-cropped.png";
import { useScrollTo } from "./hooks/useScrollTo";

const navLinks = [
  { label: "Home", target: "#home" },
  { label: "Services", target: "#services" },
  { label: "Works", target: "#works" },
  { label: "Testimonials", target: "#testimonials" },
  { label: "Instagram", target: "#instagram" },
  { label: "FAQ", target: "#FAQ" },
  { label: "Contact", target: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollTo = useScrollTo();

  const handleClick = (e, target) => {
    e.preventDefault();
    scrollTo(target);
    setIsMenuOpen(false); // close mobile menu if open
  };

  return (
    <>
      <header
        className={`fixed z-50 w-full py-4  transition-all duration-300  px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)] 
          ${
            scrolled
              ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
              : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl 2mxl:max-w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-[160px] xl:w-[200px]  3xl:w-[350px] flex items-center">
            <img
              className="w-full h-full object-contain"
              src={logo}
              alt="Boodmoard logo"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.label}
                href={link.target}
                onClick={(e) => handleClick(e, link.target)}
                href={`#${link.label.toLowerCase()}`}
                className="text-zinc-400   cursor-pointer list-none hover:text-white text-sm xl:text-base 2xl:text-lg 3xl:text-2xl font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#4CAF4F] group-hover:w-full transition-all duration-300 rounded-full" />
              </li>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm 2xl:text-lg 3xl:text-2xl text-zinc-400 hover:text-white font-medium transition-colors duration-200"
            >
              Log in
            </a>
            <a
              href="#contact"
              className="bg-[#4CAF4F] hover:bg-[#43A047] active:scale-75  hover:scale-95  text-white text-sm 2xl:text-base 3xl:text-2xl font-semibold px-6 py-2.5 rounded-sm 3xl:rounded-md transition-all duration-300  hover:shadow-[0_20px_100px_rgba(76,175,79,0.55)]
               transform-gpu
    will-change-transform
              
               cursor-pointer"
            >
              Get Started
            </a>
          </div>

          <div className="hamburgers   lg:hidden">
            <button
              className={`hamburger !p-0 cursor-pointer hamburger--slider ${isMenuOpen ? "is-active" : ""}`}
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="hamburger-box ">
                <span className="hamburger-inner !top-[5px] !w-[30px]"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={`#${link.label.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-2xl  md:text-5xl font-bold hover:text-[#4CAF4F] transition-colors duration-200"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => setIsMenuOpen(false)}
              className=" bg-[#4CAF4F] text-white font-semibold px-10 py-4 rounded-sm text-lg md:text-2xl hover:bg-[#43A047] transition-all duration-300"
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
