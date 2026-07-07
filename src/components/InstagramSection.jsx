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

const reels = [
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
];

export default function InstagramSection() {
  return (
    <section className="bg-black py-20 px-5">
      <div className="max-w-7xl 2xl:max-w-full mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-green-400 text-sm xl:text-md 2xl:text-lg 3xl:text-xl font-medium">
            SOCIAL MEDIA
          </p>

          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold mt-4">
            Follow Our Journey
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto leading-7">
            Take a look behind the scenes, our latest client work, creative
            process and trending reels.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={profile.avatar}
                alt=""
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-green-500"
              />

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <FaInstagram className="text-pink-500 text-xl" />
                  <span className="text-white text-xl font-semibold">
                    {profile.username}
                  </span>
                </div>

                <h3 className="text-zinc-300 mt-2 text-lg">{profile.name}</h3>

                <button className="mt-6 cursor-pointer bg-green-500 hover:bg-green-600 transition text-black font-semibold px-7 py-3 rounded-full flex items-center gap-2 mx-auto sm:mx-0">
                  View Profile
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-12 text-center w-full lg:w-auto">
              <div>
                <h3 className="text-white text-3xl font-bold">
                  {profile.posts}
                </h3>
                <p className="text-zinc-400 mt-2">Posts</p>
              </div>

              <div>
                <h3 className="text-white text-3xl font-bold">
                  {profile.followers}
                </h3>
                <p className="text-zinc-400 mt-2">Followers</p>
              </div>

              <div>
                <h3 className="text-white text-3xl font-bold">
                  {profile.following}
                </h3>
                <p className="text-zinc-400 mt-2">Following</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 cursor-pointer"
            >
              <img
                src={reel.thumbnail}
                alt=""
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition">
                  <FaPlay className="text-white ml-1 text-xl" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5">
                <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                  👁 {reel.views}
                </span>
              </div>

              <div className="absolute bottom-5 right-5">
                <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
                  {reel.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button className="border cursor-pointer border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition px-8 py-4 rounded-full font-semibold flex items-center gap-3">
            Explore More Reels
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
