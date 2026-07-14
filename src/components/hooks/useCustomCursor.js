import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useCustomCursor(dotRef, ballRef) {
  useEffect(() => {
    const dot = dotRef.current;
    const ball = ballRef.current;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // cache last target — avoid getComputedStyle on every pixel
    let lastTarget = null;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      gsap.set(dot, { opacity: 1 });

      gsap.set(dot, { x: e.clientX, y: e.clientY });

      if (e.target !== lastTarget) {
        lastTarget = e.target;

        // walk up DOM tree until we find a hoverable element or hit body
        let el = e.target;
        let isHoverable = false;

        while (el && el !== document.body) {
          const tag = el.tagName?.toLowerCase();
          const role = el.getAttribute("role");
          const cursor = window.getComputedStyle(el).cursor;
          const hasDataAttr = el.hasAttribute("data-cursor");

          if (
            tag === "a" ||
            tag === "button" ||
            tag === "input" ||
            tag === "textarea" ||
            tag === "select" ||
            role === "button" ||
            hasDataAttr ||
            cursor === "pointer"
          ) {
            isHoverable = true;
            break;
          }

          el = el.parentElement;
        }

        if (isHoverable) {
          gsap.to(ball, {
            scale: 2.5,
            opacity: 0.4,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(dot, { scale: 0, duration: 0.3 });
        } else {
          gsap.to(ball, {
            scale: 1,
            opacity: 0.6,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(dot, { scale: 1, duration: 0.3 });
        }
      }
    };

    const ticker = () => {
      pos.x += (mouse.x - pos.x) * 0.1;
      pos.y += (mouse.y - pos.y) * 0.1;
      gsap.set(ball, { x: pos.x, y: pos.y });
    };

    gsap.ticker.add(ticker);
    window.addEventListener("mousemove", onMouseMove);

    // hide/show on window enter/leave
    const onMouseLeaveWindow = () => {
      gsap.to([dot, ball], { opacity: 0, duration: 0.3 });
    };
    const onMouseEnterWindow = () => {
      gsap.to(dot, { opacity: 1, duration: 0.3 });
      gsap.to(ball, { opacity: 0.6, duration: 0.3 });
    };

    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    return () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
    };
  }, []);
}
