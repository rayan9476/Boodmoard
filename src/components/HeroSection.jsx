import { motion } from "framer-motion";
import { Palette, Rocket, Star } from "lucide-react";
import { useScrollTo } from "./hooks/useScrollTo";
import { useCountUp } from "./hooks/useCountUp";
import { useLoader } from "./context/LoaderContext";
const slide = {
  title: "We Build Digital",
  subtitle: "Experiences That Convert",
  dsc: "Boodmoard is a creative agency crafting modern websites, bold brand identities, and high-performing digital products.",
  ata: "Our Work",
  cta: "Contact Us",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      // delay: i * 0.15,

      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    x: 0,
    // scale: 1,
    transition: {
      duration: 0.9,
      // delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.85,
    filter: "blur(8px)",
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      delay: 0.8 + i * 0.18,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};
const scrollTo = useScrollTo();

const handleClick = (e, target) => {
  e.preventDefault();
  scrollTo(target);
};

function HeroStat({ num, label, delay, loaded }) {
  const { count } = useCountUp(num, 1800, false, delay, loaded);

  return (
    <div className="text-center lg:text-left">
      <p className="text-white text-2xl xl:text-3xl 3xl:text-5xl font-bold tabular-nums">
        {count || "0"}
      </p>
      <p className="text-zinc-500 text-sm 3xl:text-lg mt-1">{label}</p>
    </div>
  );
}

export default function HeroSection({ id }) {
  const loaded = useLoader();

  return (
    <div
      id={id}
      className="relative w-full py-16 lg:py-28 overflow-hidden  px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
    >
      {/* Background glow */}
      {/* <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] bg-[#4CAF4F]/10 rounded-full blur-[120px] pointer-events-none" /> */}
      {/* <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#4CAF4F]/8 rounded-full blur-[100px] pointer-events-none" /> */}

      <div className="w-full  max-w-7xl  2mxl:max-w-full mx-auto ">
        <div className="relative w-full min-h-[85vh] flex items-center">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-12 lg:gap-0 items-center justify-between w-full">
            {/* Left content */}
            <div className="flex flex-col lg:items-start lg:text-left items-center text-center w-full lg:w-1/2">
              {/* Tag */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                // animate="show"
                animate={loaded ? "show" : false}
                custom={0}
                className="inline-flex items-center gap-2 bg-[#4CAF4F]/10 border border-[#4CAF4F]/30 text-[#4CAF4F] text-xs 3xl:text-lg font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest "
              >
                <span className="w-2 h-2 3xl:w-3 3xl:h-3 rounded-full bg-[#4CAF4F] animate-pulse" />
                Creative Digital Agency
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                // animate="show"
                animate={loaded ? "show" : false}
                custom={1}
                className="text-[#FFFFFF]  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] 3xl:text-8xl font-bold leading-tight mb-4"
              >
                {slide.title} <br />
                <span className="text-[#4CAF4F]">{slide.subtitle}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                // animate="show"
                animate={loaded ? "show" : false}
                custom={2}
                className="text-gray-400  text-sm sm:text-base md:text-lg lg:text-xl 3xl:text-2xl max-w-xl mb-8 leading-relaxed"
              >
                {slide.dsc}
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                // animate="show"
                animate={loaded ? "show" : false}
                custom={3}
                className="flex gap-4 items-center justify-center lg:justify-start flex-wrap"
              >
                {/* <button className="bg-[#4CAF4F] hover:bg-[#43A047] active:scale-95 text-white font-semibold text-sm sm:text-base 3xl:text-3xl px-8 py-4 rounded-sm tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer">
                  {slide.ata}
                </button> */}

                <button
                  type="button"
                  onClick={(e) => handleClick(e, "#works")}
                  className="
   bg-[#4CAF4F] hover:bg-[#43A047] active:scale-95 text-white font-semibold text-sm sm:text-base 3xl:text-3xl px-8 py-4 rounded-sm tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer
    transform-gpu
    will-change-transform

    
  "
                >
                  {slide.ata}
                </button>

                <button
                  type="button"
                  onClick={(e) => handleClick(e, "#contact")}
                  className="border border-[#4CAF4F]/50 hover:border-[#4CAF4F] text-[#4CAF4F] hover:bg-[#4CAF4F]/10 font-semibold text-sm sm:text-base 3xl:text-3xl px-8 py-4 rounded-sm tracking-wide transition-all duration-300 cursor-pointer"
                >
                  {slide.cta}
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                // animate="show"
                animate={loaded ? "show" : false}
                custom={4}
                className="flex gap-10 mt-12 justify-center lg:justify-start"
              >
                {[
                  { num: "120+", label: "Projects Done", delay: 500 },
                  { num: "48K", label: "Social Followers", delay: 500 },
                  { num: "18+", label: "Years Experience", delay: 500 },
                ].map((stat) => (
                  // <div key={stat.label} className="text-center lg:text-left">
                  //   <p className="text-white text-2xl xl:text-3xl 3xl:text-5xl font-bold">
                  //     {stat.num}
                  //   </p>
                  //   <p className="text-zinc-500 text-sm 3xl:text-lg mt-1">
                  //     {stat.label}
                  //   </p>
                  // </div>

                  <HeroStat
                    key={stat.label}
                    num={stat.num}
                    label={stat.label}
                    delay={stat.delay}
                    loaded={loaded}
                  />
                ))}
              </motion.div>
            </div>

            {/* Right side — floating cards visual */}
            <motion.div
              // initial={{ opacity: 0, x: 60 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{
              //   duration: 0.9,
              //   delay: 0.3,
              //   ease: [0.25, 0.1, 0.25, 1],
              // }}
              variants={imageVariant}
              initial="hidden"
              animate={loaded ? "show" : false}
              className="hidden lg:flex w-1/2 justify-center items-center relative"
            >
              {/* Main image card */}
              <div className="relative w-[380px] h-[460px] 2xl:w-[480px] 2xl:h-[560px] 3xl:w-[800px] 3xl:h-[900px]">
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                  <img
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80"
                    alt="Agency work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Floating badge 1 */}

                <motion.div
                  variants={cardVariant}
                  custom={0}
                  animate={loaded ? "show" : false}
                  className="absolute -top-6 -left-10"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      delay: 1.45,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="floating-card border border-white/10 bg-white/2 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl transform-gpu will-change-transform">
                      <div className="w-9 h-9 3xl:w-12 3xl:h-12 rounded-xl bg-[#4CAF4F]/20 flex items-center justify-center text-lg">
                        <Palette
                          className="w-5 h-5 text-green-400"
                          strokeWidth={2.2}
                        />
                      </div>
                      <div className="flex items-start justify-start flex-col will-change-transform">
                        <p className="text-white text-sm 3xl:text-base font-bold ">
                          UI Design
                        </p>
                        <p className="text-[#4CAF4F] font-bold text-xs 3xl:text-sm ">
                          Pixel perfect
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                {/* Floating badge 2 */}

                <motion.div
                  variants={cardVariant}
                  custom={1}
                  animate={loaded ? "show" : false}
                  className="absolute -bottom-6 -right-10"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 3.5,
                      delay: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      // delay: 0.5,
                    }}
                  >
                    <div className="floating-card border border-white/10 bg-white/2 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl transform-gpu will-change-transform">
                      <div className="w-9 h-9 3xl:w-12 3xl:h-12 rounded-xl bg-[#4CAF4F]/20 flex items-center justify-center text-lg">
                        <Rocket
                          className="w-5 h-5 text-[#4CAF4F]"
                          strokeWidth={2.2}
                        />
                      </div>
                      <div className="flex items-start justify-start flex-col will-change-transform">
                        <p className="text-white text-sm 3xl:text-base font-bold ">
                          120+ Projects
                        </p>
                        <p className="text-[#4CAF4F] font-bold text-xs 3xl:text-sm ">
                          Delivered
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating badge 3 */}

                <motion.div
                  variants={cardVariant}
                  animate={loaded ? "show" : false}
                  custom={2}
                  className="absolute top-1/2 -right-14"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      // delay: 1,
                      delay: 1.75,
                    }}
                  >
                    <div className="floating-card border border-white/10 bg-white/2 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl transform-gpu will-change-transform">
                      <div className="w-9 h-9 3xl:w-12 3xl:h-12 rounded-xl bg-[#4CAF4F]/20 flex items-center justify-center text-lg">
                        <Star
                          className="w-5 h-5 text-[#4CAF4F]"
                          strokeWidth={2.2}
                        />
                      </div>
                      <div className="flex items-start justify-start flex-col will-change-transform">
                        <p className="text-white text-sm font-bold">
                          5.0 Rating
                        </p>
                        <p className="text-[#4CAF4F] text-xs">Client reviews</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
