import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Smartphone,
  ShoppingCart,
  PenTool,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
// const services = [
//   {
//     icon: "🎨",
//     title: "UI/UX Design",
//     desc: "We design interfaces that look stunning and feel effortless to use.",
//   },
//   {
//     icon: "💻",
//     title: "Web Development",
//     desc: "Fast, modern, responsive websites built with the latest tech stack.",
//   },
//   {
//     icon: "📱",
//     title: "Mobile Apps",
//     desc: "Native and cross-platform apps built for Android and iOS.",
//   },
//   {
//     icon: "🛒",
//     title: "E-Commerce",
//     desc: "Online stores that convert visitors into loyal customers.",
//   },
//   {
//     icon: "✏️",
//     title: "Brand Identity",
//     desc: "We build brand identities that are memorable and powerful.",
//   },
//   {
//     icon: "📈",
//     title: "SEO & Growth",
//     desc: "Data-driven strategies that grow your traffic and revenue.",
//   },
// ];

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "We design interfaces that look stunning and feel effortless to use.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, modern, responsive websites built with the latest tech stack.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform apps built for Android and iOS.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Online stores that convert visitors into loyal customers.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "We build brand identities that are memorable and powerful.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    desc: "Data-driven strategies that grow your traffic and revenue.",
  },
];

export default function ServicesSection({ id }) {
  return (
    <section
      id={id}
      className="bg-black py-24  relative overflow-hidden px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4CAF4F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl  2mxl:max-w-full  mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm lg:text-base xl:text-lg font-medium">
            What We Do
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
            Our Services
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl text-xl mx-auto leading-7">
            From design to development, we build digital products that help
            businesses grow and stand out online.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#4CAF4F]/40"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#4CAF4F]/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 3xl:w-20 3xl:h-20 rounded-2xl bg-[#4CAF4F]/10 border border-[#4CAF4F]/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition duration-300">
                    {/* {s.icon} */}
                    <Icon
                      className="w-7 h-7 3xl:w-10 3xl:h-10 text-[#4CAF4F]"
                      strokeWidth={2.2}
                    />
                  </div>
                  <h3 className="text-white text-2xl 3xl:text-3xl font-semibold mb-3">
                    {s.title}
                  </h3>

                  <p className="text-zinc-400 3xl:text-lg mt-3 leading-7">
                    {s.desc}
                  </p>
                  {/* <div className="mt-6 text-[#4CAF4F] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn more <span>→</span>
                  </div> */}

                  <button className="mt-6 cursor-pointer text-[#4CAF4F] font-medium lg:text-xl 3xl:text-2xl flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <ArrowRight className=" " size={22} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
