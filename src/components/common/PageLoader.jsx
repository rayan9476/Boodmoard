import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/nexlify-logo-transparent-cropped.png";
import { useLocation } from "react-router-dom";

export default function PageLoader({ play, onComplete }) {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const overlaysRef = useRef([]);
  const location = useLocation();

  useLayoutEffect(() => {
    if (play) return;
    const loader = loaderRef.current;
    const logo = logoRef.current;
    const text = textRef.current;
    const progress = progressRef.current;
    const progressBar = progressBarRef.current;

    // prevent scroll while loading
    document.body.style.overflow = "hidden";

    gsap.set(logo, {
      opacity: 0,
      y: 10,
    });

    gsap.set(text, {
      opacity: 0,
      y: 10,
    });

    gsap.set(progressBar, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        onComplete?.();
      },
    });

    // // logo
    // tl.fromTo(
    //   logo,
    //   { opacity: 0, y: 10, overwrite: "auto" },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.6,
    //     ease: "power3.out",
    //     overwrite: "auto",
    //   },
    // )

    //   // text
    //   .fromTo(
    //     text,
    //     { opacity: 0, y: 10, overwrite: "auto" },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       duration: 0.5,
    //       ease: "power2.out",
    //       overwrite: "auto",
    //     },
    //     "-=0.2",
    //   )

    //   //  progressBar
    //   .fromTo(
    //     progressBar,
    //     { scaleX: 0, overwrite: "auto" },
    //     { scaleX: 1, duration: 1.4, ease: "power2.inOut", overwrite: "auto" },
    //     "-=0.1",
    //   )

    tl.to(logo, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      )
      .to(
        progressBar,
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=0.1",
      )

      //  count up 0 to 100
      .to(
        progress,
        {
          innerText: 100,
          duration: 1.2,
          ease: "power2.inOut",
          snap: { innerText: 1 },
          onUpdate() {
            progress.innerText = Math.round(progress.innerText) + "%";
          },
        },
        "<",
      )

      //  fade out logo + text + bar
      .to(
        [logo, text, progressBar.parentElement, progress],
        { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" },
        "+=0.1",
      )

      //  slide panels up to reveal page
      .to(
        overlaysRef.current,
        {
          yPercent: -100,
          duration: 0.6,
          ease: "power4.inOut",
          stagger: 0.07,
        },
        "-=0.1",
      )

      .to(
        loaderRef.current,
        {
          opacity: 0,

          pointerEvents: "none",
        },
        "-=0.1",
      );

    return () => tl.kill();
  }, [play, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      {/* Overlay panels — staggered slide up */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (overlaysRef.current[i] = el)}
          className="absolute inset-0 bg-[#0b0b0b]"
          style={{ zIndex: 9999 - i }}
        />
      ))}

      {/* Content — sits above panels */}
      <div className="relative z-[10000] flex items-center justify-center flex-col items-center gap-8">
        {/* Logo */}
        <img
          ref={logoRef}
          src={logo}
          alt="Boodmoard"
          className="h-10 lg:h-16  3xl:h-20 w-auto opacity-0"
        />

        {/* Tagline */}
        <p
          ref={textRef}
          className="text-zinc-500 text-xs lg:text-[14px] xl:text-base 2xl:text-lg 3xl:text-xl uppercase tracking-[6px] opacity-0"
        >
          Creative Digital Studio
        </p>

        {/* Progress */}
        <div className="flex flex-col items-center gap-3 w-48">
          {/* Bar */}
          <div className="w-full h-px lg:h-[2px] 2xl:h-[3px] 3xl:h-[4px] bg-white/10 overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-[#4CAF4F] origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          {/* Number */}
          <p
            ref={progressRef}
            className="text-[#4CAF4F] text-xs lg:text-base 2xl:text-lg 3xl:text-xl tabular-nums"
          >
            0%
          </p>
        </div>
      </div>
    </div>
  );
}
