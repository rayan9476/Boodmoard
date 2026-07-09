// import { FaInstagram, FaPlay, FaArrowRight } from "react-icons/fa";

// const profile = {
//   username: "@boodmoard",
//   name: "Boodmoard Creative Studio",
//   avatar:
//     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
//   posts: "284",
//   followers: "48.2K",
//   following: "612",
// };

// const reels = [
//   {
//     id: 1,
//     thumbnail:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
//     duration: "0:24",
//     views: "124K",
//   },
//   {
//     id: 2,
//     thumbnail:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
//     duration: "0:18",
//     views: "98K",
//   },
//   {
//     id: 3,
//     thumbnail:
//       "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
//     duration: "0:36",
//     views: "256K",
//   },
//   {
//     id: 4,
//     thumbnail:
//       "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
//     duration: "0:29",
//     views: "41K",
//   },
//   {
//     id: 5,
//     thumbnail:
//       "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
//     duration: "0:40",
//     views: "72K",
//   },
//   {
//     id: 6,
//     thumbnail:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//     duration: "0:15",
//     views: "188K",
//   },
// ];

// export default function InstagramSection() {
//   return (
//     <section className="bg-black py-20  px-5">
//       <div className="max-w-7xl 2xl:max-w-full mx-auto">
//         <div className="text-center mb-16">
//           <p className="uppercase tracking-[5px] text-green-400 text-sm xl:text-md 2xl:text-lg 3xl:text-xl font-medium">
//             SOCIAL MEDIA
//           </p>

//           <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
//             Follow Our Journey
//           </h2>

//           <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-7">
//             Take a look behind the scenes, our latest client work, creative
//             process and trending reels.
//           </p>
//         </div>

//         <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
//             <div className="flex flex-col sm:flex-row items-center gap-6">
//               <img
//                 src={profile.avatar}
//                 alt=""
//                 className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-green-500"
//               />

//               <div className="text-center sm:text-left">
//                 <div className="flex items-center justify-center sm:justify-start gap-2">
//                   <FaInstagram className="text-pink-500 text-xl" />
//                   <span className="text-white text-xl font-semibold">
//                     {profile.username}
//                   </span>
//                 </div>

//                 <h3 className="text-zinc-300 mt-2 text-lg">{profile.name}</h3>

//                 <button className="mt-6 cursor-pointer bg-green-500 hover:bg-green-600 transition text-black font-semibold px-7 py-3 rounded-full flex items-center gap-2 mx-auto sm:mx-0">
//                   View Profile
//                   <FaArrowRight />
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-3 gap-6 md:gap-12 text-center w-full lg:w-auto">
//               <div>
//                 <h3 className="text-white text-3xl font-bold">
//                   {profile.posts}
//                 </h3>
//                 <p className="text-zinc-400 mt-2">Posts</p>
//               </div>

//               <div>
//                 <h3 className="text-white text-3xl font-bold">
//                   {profile.followers}
//                 </h3>
//                 <p className="text-zinc-400 mt-2">Followers</p>
//               </div>

//               <div>
//                 <h3 className="text-white text-3xl font-bold">
//                   {profile.following}
//                 </h3>
//                 <p className="text-zinc-400 mt-2">Following</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
//           {reels.map((reel) => (
//             <div
//               key={reel.id}
//               className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 cursor-pointer"
//             >
//               <img
//                 src={reel.thumbnail}
//                 alt=""
//                 className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//               <div className="absolute inset-0 flex justify-center items-center">
//                 <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition">
//                   <FaPlay className="text-white ml-1 text-xl" />
//                 </div>
//               </div>

//               <div className="absolute bottom-5 left-5">
//                 <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
//                   👁 {reel.views}
//                 </span>
//               </div>

//               <div className="absolute bottom-5 right-5">
//                 <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
//                   {reel.duration}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-14">
//           <button className="border cursor-pointer border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition px-8 py-4 rounded-full font-semibold flex items-center gap-3">
//             Explore More Reels
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaPlay, FaArrowRight } from "react-icons/fa";

const profile = {
  username: "@boodmoard",
  name: "Boodmoard Creative Studio",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  posts: "284",
  followers: "48.2K",
  following: "612",
};

const allReels = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    duration: "0:24",
    views: "124K",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    duration: "0:18",
    views: "98K",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    duration: "0:36",
    views: "256K",
  },
  {
    id: 4,
    thumbnail:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
    duration: "0:29",
    views: "41K",
  },
  {
    id: 5,
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    duration: "0:40",
    views: "72K",
  },
  {
    id: 6,
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    duration: "0:15",
    views: "188K",
  },
  {
    id: 7,
    thumbnail:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
    duration: "0:22",
    views: "55K",
  },
  {
    id: 8,
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    duration: "0:31",
    views: "93K",
  },
  {
    id: 9,
    thumbnail:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    duration: "0:19",
    views: "210K",
  },
];

export default function InstagramSection({ id }) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visibleReels = allReels.slice(0, visibleCount);
  const hasMore = visibleCount < allReels.length;

  return (
    <section
      id={id}
      className="bg-black py-20  px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)]"
    >
      <div className="max-w-7xl  2mxl:max-w-full  mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#4CAF4F] text-sm lg:text-base xl:text-lg font-medium">
            Social Media
          </p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
            Follow Our Journey
          </h2>
          <p className="text-zinc-400 mt-5 max-w-2xl text-xl mx-auto leading-7">
            Take a look behind the scenes, our latest client work, creative
            process and trending reels.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={profile.avatar}
                alt=""
                className="w-28 h-28 md:w-36 md:h-36  rounded-full object-cover border-4 border-[#4CAF4F]"
              />
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <FaInstagram className="text-pink-500 " size={22} />
                  <span className="text-white text-xl 3xl:text-2xl font-semibold">
                    {profile.username}
                  </span>
                </div>
                <h3 className="text-zinc-300 mt-2 text-lg 3xl:text-xl">
                  {profile.name}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 cursor-pointer bg-[#4CAF4F] hover:bg-[#43A047] transition-all duration-200 ease-in text-white font-semibold 3xl:text-xl px-7 py-3 rounded-full flex items-center gap-2 hover:gap-3 mx-auto sm:mx-0"
                >
                  View Profile <FaArrowRight size={22} />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-12 text-center w-full lg:w-auto">
              {[
                { val: profile.posts, label: "Posts" },
                { val: profile.followers, label: "Followers" },
                { val: profile.following, label: "Following" },
              ].map((s) => (
                <div key={s.label}>
                  <h3 className="text-white text-3xl 3xl:text-4xl font-bold">
                    {s.val}
                  </h3>
                  <p className="text-zinc-400 mt-2 3xl:text-xl">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <AnimatePresence>
            {visibleReels.map((reel, i) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: i >= 6 ? (i - 6) * 0.1 : 0,
                }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 cursor-pointer"
              >
                <img
                  src={reel.thumbnail}
                  alt=""
                  className="w-full aspect-[2/3] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-16 h-16 3xl:w-20 3xl:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition">
                    <FaPlay className="text-white ml-1 text-xl 3xl:w-8 3xl:h-8" />
                  </div>
                </div>
                <div className="absolute bottom-5 left-5">
                  <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm 3xl:text-xl">
                    👁 {reel.views}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5">
                  <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm 3xl:text-xl">
                    {reel.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-14">
          {hasMore ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="border cursor-pointer border-[#4CAF4F] text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold flex items-center gap-3 3xl:text-2xl"
            >
              Explore More Reels <FaArrowRight size={22} />
            </motion.button>
          ) : (
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              href="https://instagram.com/boodmoard"
              target="_blank"
              rel="noreferrer"
              className="border cursor-pointer border-[#4CAF4F] text-[#4CAF4F] hover:bg-[#4CAF4F] hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold flex items-center gap-3 3xl:text-2xl"
            >
              View on Instagram <FaArrowRight size={22} />
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
}
