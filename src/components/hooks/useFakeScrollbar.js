// import { useEffect } from "react";
// import gsap from "gsap";
// import { useLocation } from "react-router-dom";

// gsap.defaults({ overwrite: "auto" });
// export function useFakeScrollbar(thumbRef, options = {}) {
//   const { bgColor = null, thumbRatio = 0.12, fadeDelay = 100 } = options;
//   const location = useLocation();

//   useEffect(() => {
//     let lenis;
//     let rafId;
//     let fadeTimeout;
//     let fadeTween;

//     let isVisible = false;
//     let lastScroll = -1;

//     const showThumb = () => {
//       if (isVisible) return;
//       gsap.killTweensOf(thumbRef.current, "opacity");
//       gsap.set(thumbRef.current, { opacity: 1 });
//       isVisible = true;
//     };

//     const hideThumb = () => {
//       gsap.killTweensOf(thumbRef.current, "opacity");
//       gsap.to(thumbRef.current, {
//         opacity: 0,
//         duration: 0.2,
//         overwrite: true,
//         onComplete: () => (isVisible = false),
//       });
//     };
//     const updateThumb = ({ scroll, limit }) => {
//       if (!limit || !thumbRef.current) return;

//       // ignore inertial micro-updates
//       if (Math.abs(scroll - lastScroll) < 0.1) return;
//       lastScroll = scroll;

//       const thumbHeight = window.innerHeight * thumbRatio;
//       const progress = scroll / limit;

//       gsap.set(thumbRef.current, {
//         height: thumbHeight,
//         y: progress * (window.innerHeight - thumbHeight),
//       });

//       showThumb();

//       clearTimeout(fadeTimeout);
//       fadeTimeout = setTimeout(hideThumb, fadeDelay);
//     };

//     let tries = 0;

//     const init = () => {
//       lenis = window.__lenis;

//       if (!lenis || !thumbRef.current) {
//         if (tries < 60) {
//           tries++;
//           rafId = requestAnimationFrame(init);
//         }
//         return;
//       }

//       lenis.resize();

//       lenis.on("scroll", updateThumb);

//       if (bgColor) {
//         thumbRef.current.style.background = bgColor;
//       }
//     };

//     init();

//     return () => {
//       cancelAnimationFrame(rafId);
//       clearTimeout(fadeTimeout);

//       if (lenis) {
//         lenis.off("scroll", updateThumb);
//       }

//       if (thumbRef.current) {
//         gsap.killTweensOf(thumbRef.current);
//       }
//     };
//   }, [bgColor, thumbRatio, fadeDelay, location.pathname, thumbRef]);
// }

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

gsap.defaults({ overwrite: "auto" });

export function useFakeScrollbar(thumbRef, options = {}) {
  const { bgColor = null, thumbRatio = 0.12, fadeDelay = 100 } = options;

  useLayoutEffect(() => {
    let lenis;
    let rafId;
    let fadeTimeout;
    let tries = 0;

    let isVisible = false;
    let lastScroll = -1;

    const thumb = thumbRef.current;

    if (!thumb) return;

    const showThumb = () => {
      if (isVisible) return;

      gsap.killTweensOf(thumb, "opacity");

      gsap.to(thumb, {
        opacity: 1,
        duration: 0.12,
        overwrite: true,
      });

      isVisible = true;
    };

    const hideThumb = () => {
      gsap.killTweensOf(thumb, "opacity");

      gsap.set(thumb, {
        opacity: 0,
        duration: 0.2,
        overwrite: true,
        onComplete: () => {
          isVisible = false;
        },
      });
    };

    const updateThumb = ({ scroll, limit }) => {
      if (!thumb || !limit) return;

      const thumbHeight = window.innerHeight * thumbRatio;
      const progress = gsap.utils.clamp(0, 1, scroll / limit);

      gsap.set(thumb, {
        height: thumbHeight,
        y: progress * (window.innerHeight - thumbHeight),
      });

      // Don't show at page top
      if (scroll <= 0) {
        hideThumb();
        return;
      }

      showThumb();

      clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(hideThumb, fadeDelay);
    };
    const init = () => {
      lenis = window.__lenis;

      if (!lenis) {
        if (tries < 60) {
          tries++;
          rafId = requestAnimationFrame(init);
        }
        return;
      }

      if (bgColor) {
        thumb.style.background = bgColor;
      }

      lenis.resize();

      rafId = requestAnimationFrame(() => {
        updateThumb({
          scroll: lenis.scroll,
          limit: lenis.limit,
        });

        lenis.on("scroll", updateThumb);
      });
    };

    init();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fadeTimeout);

      if (lenis) {
        lenis.off("scroll", updateThumb);
      }

      gsap.killTweensOf(thumb);
    };
  }, [bgColor, thumbRatio, fadeDelay, thumbRef]);
}
