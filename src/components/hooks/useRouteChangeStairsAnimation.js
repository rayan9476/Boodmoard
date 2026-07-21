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
