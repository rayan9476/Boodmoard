// const works = [
//   {
//     id: 1,
//     title: "Web Development",
//     description: "Modern, responsive and high-performance websites.",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
//   },
//   {
//     id: 2,
//     title: "UI / UX Design",
//     description: "Beautiful interfaces focused on user experience.",
//     image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
//   },
//   {
//     id: 3,
//     title: "Brand Identity",
//     description: "Creative branding and visual identity solutions.",
//     image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
//   },
//   {
//     id: 4,
//     title: "Mobile Apps",
//     description: "Fast and intuitive Android & iOS applications.",
//     image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
//   },
//   {
//     id: 5,
//     title: "E-Commerce",
//     description: "Scalable online stores with premium experience.",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
//   },
//   {
//     id: 6,
//     title: "SEO & Marketing",
//     description: "Grow your business with digital marketing.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
//   },
// ];

// export default function OurWorks() {
//   return (
//     <section className="bg-black pt-24 lg:py-24 px-2 lg:px-4 xl:px-8">
//       <div className="max-w-7xl 2xl:max-w-full mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
//             Our Works
//           </h2>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {works.map((work) => (
//             <div
//               key={work.id}
//               className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,.5)] hover:-translate-y-3 hover:border-green-500/50 transition-all duration-500"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={work.image}
//                   alt={work.title}
//                   className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
//                 />
//               </div>

//               <div className="p-7">
//                 <h3 className="text-white text-2xl font-semibold">
//                   {work.title}
//                 </h3>

//                 <p className="text-zinc-400 mt-3 leading-7">
//                   {work.description}
//                 </p>

//                 <button className="mt-6 cursor-pointer text-green-400 font-medium group-hover:translate-x-2 transition">
//                   View Project →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const works = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, responsive and high-performance websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    id: 2,
    title: "UI / UX Design",
    description: "Beautiful interfaces focused on user experience.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
  },
  {
    id: 3,
    title: "Brand Identity",
    description: "Creative branding and visual identity solutions.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800",
  },
  {
    id: 4,
    title: "Mobile Apps",
    description: "Fast and intuitive Android & iOS applications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },
  {
    id: 5,
    title: "E-Commerce",
    description: "Scalable online stores with premium experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
  {
    id: 6,
    title: "SEO & Marketing",
    description: "Grow your business with digital marketing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
];

export default function OurWorks({ id }) {
  return (
    <section
      id={id}
      className="bg-black pt-24 lg:py-24 px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
    >
      <div className="max-w-7xl  2mxl:max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm  lg:text-base xl:text-lg  font-medium mb-3">
            Portfolio
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold">
            Our Works
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_15px_60px_rgba(0,0,0,.5)] hover:-translate-y-3 hover:border-[#4CAF4F]/50 transition-all duration-500 ease-in will-change-transform"
            >
              <div className="overflow-hidden relative group-hover:scale-110 transition-transform duration-700">
                <img
                  src={work.image}
                  alt={work.title}
                  className="block h-64 3xl:h-80 w-full object-cover "
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              <div className="p-7">
                <h3 className="text-white text-2xl 3xl:text-3xl font-semibold">
                  {work.title}
                </h3>
                <p className="text-zinc-400 3xl:text-lg mt-3 leading-7">
                  {work.description}
                </p>
                <button className="mt-6 cursor-pointer text-[#4CAF4F] font-medium lg:text-xl 3xl:text-2xl flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                  View Project
                  <ArrowRight className=" " size={22} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
