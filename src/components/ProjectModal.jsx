import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";

// const TRANSITION = {
//   duration: 0.5,
//   ease: [0.32, 0.72, 0, 1],
// };

const TRANSITION = {
  type: "spring",
  stiffness: 340,
  damping: 32,
  mass: 0.85,
};

export default function ProjectModal({ project, onClose, onContact }) {
  // close on ESC key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.stop();

    return () => {
      if (lenis) lenis.start();
    };
  }, []);

  useEffect(() => {
    console.log("kk", project.id);
  }, [project]);

  if (!project) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-[99] bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        //   exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        {/* <div className="absolute inset-0 bg-black/80 backdrop-blur-md" /> */}
        {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, delay: 0.35 }} // ← waits for card to go back
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      /> */}

        {/* Modal card */}
        <motion.div
          // initial={{ opacity: 0, scale: 0.92, y: 30 }}
          // animate={{ opacity: 1, scale: 1, y: 0 }}
          // exit={{ opacity: 0, scale: 0.95, y: 20 }}
          // transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}

          layoutId={`card-${project.id}`}
          layout
          onClick={(e) => e.stopPropagation()}
          transition={TRANSITION}
          data-lenis-prevent
          className="relative  overflow-hidden overflow-y-auto w-full max-w-2xl 3xl:max-w-3xl max-h-[90vh] scrollbar-none  rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-9 h-9 2xl:h-10 2xl:w-10  rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer border-none"
          >
            <FaTimes size={22} />
          </button>
          {/* <div data-lenis-prevent className="max-h-[90vh]    overflow-y-auto"> */}
          {/* Project image */}
          <div className="relative h-64 md:h-80 3xl:h-96 overflow-hidden rounded-t-[32px]">
            <motion.img
              layoutId={`image-${project.id}`}
              layout
              transition={TRANSITION}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

            {/* Category badge */}
            <div className="absolute top-5 left-5">
              <motion.span
                layoutId={`category-${project.id}`}
                layout
                transition={TRANSITION}
                className="bg-[#4CAF4F]/20 border border-[#4CAF4F]/40 text-[#4CAF4F] text-xs 2xl:text-base font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest"
              >
                {project.category}
              </motion.span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <motion.h3
              layoutId={`title-${project.id}`}
              layout
              transition={TRANSITION}
              className="text-white text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold mb-3"
            >
              {project.title}
            </motion.h3>
            <motion.p
              layoutId={`desc-${project.id}`}
              layout
              transition={TRANSITION}
              className="text-zinc-400 leading-7 2xl:text-lg 3xl:text-xl mb-6"
            >
              {project.longDesc}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.25 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="2xl:text-base  3xl:text-lg   bg-white/5 border border-white/10 text-zinc-400 hover:text-[#4CAF4F] hover:border-[#4CAF4F]/40 transition-colors duration-200 ease-in-out cursor-pointer text-xs px-3 2xl:px-4 3xl:px-5 py-1.5  rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.2 }}
              className="w-full h-px bg-white/10 mb-8"
            />

            {/* Coming soon notice */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.25 }}
              className="flex items-start gap-4 rounded-2xl border border-[#4CAF4F]/20 bg-[#4CAF4F]/5 p-5 mb-8"
            >
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 rounded-full bg-[#4CAF4F]" />
                <div className="absolute inset-0 w-2.5 h-2.5 2xl:w-3 2xl:h-3 3xl:w-4 3xl:h-4 rounded-full bg-[#4CAF4F] animate-ping opacity-40" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm 2xl:text-base 3xl:text-lg mb-1">
                  Full case study coming soon
                </p>
                <p className="text-zinc-500 text-sm 2xl:text-base 3xl:text-lg leading-6">
                  We're currently documenting this project. In the meantime,
                  reach out to us directly and we'll walk you through the full
                  process.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.25 }}
              onClick={() => {
                onClose();
                onContact();
              }}
              className="w-full 2xl:text-xl 3xl:text-2xl bg-[#4CAF4F] hover:bg-[#43A047] text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] cursor-pointer border-none shadow-[0_4px_20px_rgba(76,175,79,0.3)]"
            >
              Interested in similar work? Let's talk
              <FaArrowRight size={22} className="3xl:h-7 3xl:w-7" />
            </motion.button>
          </div>
          {/* </div> */}
        </motion.div>
      </motion.div>
    </>
  );
}
