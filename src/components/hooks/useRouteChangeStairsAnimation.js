import { useRef, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import {
  RouteChangeStairsContext,
  useRouteChangeStairs,
} from "../../components/context/RouteChangeStairsContext";
import { useContext } from "react";

gsap.defaults({ overwrite: "auto" });
export default function useRouteChangeStairsAnimation() {
  const stairsContainerRef2 = useRef(null);
  const appRef = useRef(null);

  const [isFirstRender, setisFirstRender] = useState(true);

  const { setIsRouteChanging } = useContext(RouteChangeStairsContext);

  const location = useLocation();
  const previousPath = useRef(location.pathname);
  const { setisLoaded } = useRouteChangeStairs();

  useLayoutEffect(() => {
    if (!stairsContainerRef2.current) return;

    if (previousPath.current === location.pathname) return;

    previousPath.current = location.pathname;

    const stairs = stairsContainerRef2.current.querySelectorAll(".stairs");
    if (!stairs.length) return;

    const ctx = gsap.context(() => {
      gsap.set(appRef.current, { opacity: 0 });

      // make visible immediately without animation
      gsap.set(stairsContainerRef2.current, {
        opacity: 1,
        overwrite: "auto",
      });

      gsap.set(stairs, { y: "-100%", overwrite: "auto" });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsRouteChanging(true);
          setLoaded(true);
        },
      });

      tl.to(stairs, {
        y: "0%",

        stagger: {
          amount: -0.2,
        },
        overwrite: "auto",
        immediateRender: false,
      })

        .set(stairsContainerRef2.current, {
          opacity: 0,
          overwrite: "auto",
        })

        .set(stairs, {
          y: "-100%",
          overwrite: "auto",
        })

        .call(() => {
          gsap.set(appRef.current, { opacity: 1 });

          setisFirstRender(false);
          setisLoaded(true);
        });
    });

    return () => ctx.revert();
  }, [location.pathname, , isFirstRender, setIsRouteChanging]);

  return { stairsContainerRef2, appRef };
}

// import { useRef, useLayoutEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import gsap from "gsap";
// import { RouteChangeStairsContext } from "../../components/context/RouteChangeStairsContext";
// import { useContext } from "react";

// gsap.defaults({ overwrite: "auto" });

// export default function useRouteChangeStairsAnimation() {
//   const stairsContainerRef2 = useRef(null);
//   const stairsContainerRef3 = useRef(null); // ← second layer
//   const appRef = useRef(null);

//   // const [isFirstRender, setisFirstRender] = useState(true);
//   const isFirstRender = useRef(true);

//   const { setIsRouteChanging } = useContext(RouteChangeStairsContext);

//   const location = useLocation();
//   const previousPath = useRef(location.pathname);

//   useLayoutEffect(() => {
//     if (!stairsContainerRef2.current) return;
//     if (!stairsContainerRef3.current) return;
//     if (previousPath.current === location.pathname) return;

//     previousPath.current = location.pathname;

//     const stairs1 = stairsContainerRef2.current.querySelectorAll(".stairs");
//     const stairs2 = stairsContainerRef3.current.querySelectorAll(".stairs-2");

//     if (!stairs1.length || !stairs2.length) return;

//     const ctx = gsap.context(() => {
//       // show both containers
//       gsap.set(stairsContainerRef2.current, { opacity: 1, overwrite: "auto" });
//       // gsap.set(stairsContainerRef3.current, { opacity: 1, overwrite: "auto" });

//       // both start from top
//       gsap.set(stairs1, { y: "-100%", overwrite: "auto" });
//       // gsap.set(stairs2, { y: "0%", overwrite: "auto", opacity: 0 });

//       const tl = gsap.timeline({
//         onComplete: () => {
//           setIsRouteChanging(true);
//         },
//       });

//       // // first layer slides down right to bottom
//       // tl.set(appRef.current, { opacity: 1, immediateRender: false })

//       tl.to(stairs1, {
//         y: "0%",
//         stagger: { amount: -0.2 },
//         overwrite: "auto",
//         // opacity: 1,
//         immediateRender: false,
//       })

//         // second layer follows same direction with slight delay
//         // .to(
//         //   stairs2,
//         //   {
//         //     y: "100%",
//         //     stagger: { amount: -0.2 },
//         //     overwrite: "auto",
//         //     immediateRender: false,
//         //     opacity: 1,
//         //     delay: 0.2,
//         //   },
//         //   // "-=0.35",
//         // )

//         // hide first layer
//         .set(stairsContainerRef2.current, { opacity: 0, overwrite: "auto" })
//         .set(stairs1, { y: "-100%", overwrite: "auto" })

//         // hide second layer
//         .set(stairsContainerRef3.current, { opacity: 0, overwrite: "auto" })
//         .set(stairs2, { y: "-100%", overwrite: "auto" })

//         .call(() => {
//           // gsap.set(appRef.current, { opacity: 1 });
//           // setisFirstRender(false);
//           isFirstRender.current = false;
//         });
//     });

//     return () => ctx.revert();
//   }, [location.pathname, isFirstRender, setIsRouteChanging]);

//   return { stairsContainerRef2, stairsContainerRef3, appRef };
// }
