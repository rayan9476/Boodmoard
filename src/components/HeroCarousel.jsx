const slide = {
  id: 1,
  image:
    "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Illustration: "/src/assets/Illustration.png",

  title: "Lessons and insights ",
  subtitle: " from 8 years",
  dsc: "Where to grow your business as a photographer: site or social media?",
  ata: "About us",
  cta: "Contact ",
};

export default function HeroCarousel() {
  return (
    <div
      className="hero-carousel    relative w-full "
      role="region"
      aria-label="Hero image carousel"
    >
      {/* {slides.map((slide) => ( */}
      <div
        // key={slide.id}
        className="w-full h-full px-2 lg:px-4 xl:px-8 overflow-hidden bg-[#000]"
      >
        <div className="relative  w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]   ">
          <div className="flex  flex-col lg:flex-row gap-4  md:gap-12 lg:gap-0 items-center justify-center w-full h-full absolute inset-0  ">
            <div className="content_container lg:items-start lg:text-left flex flex-col sm:items-center text-center sm:w-full justify-center">
              <div className="max-w-full  ">
                <h1 className=" text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] 3xl:text-8xl font-semibold leading-tight mb-3 sm:mb-4 2xl:mb-6 ">
                  {slide.title} <br />
                  <span className="text-[#4CAF4F]">{slide.subtitle}</span>
                </h1>

                <p className="font-satoshi text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl mb-6 sm:mb-8 2xl:mb-10 3xl:mb-12 tracking-wide">
                  {slide.dsc}
                </p>

                <div className="flex gap-4 items-center justify-center lg:items-start lg:justify-start">
                  <button
                    className="
    bg-[#4CAF4F]
    hover:bg-[#43A047]
    active:bg-[#388E3C]
    active:scale-95
    text-[#FFFFFF]
    font-semibold
    text-sm sm:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl
    px-6 sm:px-8 py-3 sm:py-4 3xl:py-6 
    leading-none
    tracking-[0.08em]
    transition-colors transition-transform
    duration-300
    hover:scale-105
    transform-gpu
    will-change-transform
    select-none
    touch-manipulation
    cursor-pointer
    rounded-sm
  "
                  >
                    {slide.ata}
                  </button>

                  <button
                    className="
    bg-[#4CAF4F]
    hover:bg-[#43A047]
    active:bg-[#388E3C]
    active:scale-95
    text-[#FFFFFF]
    font-semibold
    text-sm sm:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl
    px-6 sm:px-8 py-3 sm:py-4 3xl:py-6 
    leading-none
    tracking-[0.08em]
    transition-colors transition-transform
    duration-300
    hover:scale-105
    transform-gpu
    will-change-transform
    select-none
    touch-manipulation
    cursor-pointer
    rounded-sm
  "
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
