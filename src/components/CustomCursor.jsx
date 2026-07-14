import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCustomCursor } from "./hooks/useCustomCursor";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ballRef = useRef(null);

  //   useEffect(() => {
  //     const dot = dotRef.current;
  //     const ball = ballRef.current;

  //     const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  //     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  //     // cache last target — avoid getComputedStyle on every pixel
  //     let lastTarget = null;

  //     const onMouseMove = (e) => {
  //       mouse.x = e.clientX;
  //       mouse.y = e.clientY;

  //       gsap.set(dot, { x: e.clientX, y: e.clientY });

  //       if (e.target !== lastTarget) {
  //         lastTarget = e.target;

  //         // walk up DOM tree until we find a hoverable element or hit body
  //         let el = e.target;
  //         let isHoverable = false;

  //         while (el && el !== document.body) {
  //           const tag = el.tagName?.toLowerCase();
  //           const role = el.getAttribute("role");
  //           const cursor = window.getComputedStyle(el).cursor;
  //           const hasDataAttr = el.hasAttribute("data-cursor");

  //           if (
  //             tag === "a" ||
  //             tag === "button" ||
  //             tag === "input" ||
  //             tag === "textarea" ||
  //             tag === "select" ||
  //             role === "button" ||
  //             hasDataAttr ||
  //             cursor === "pointer"
  //           ) {
  //             isHoverable = true;
  //             break;
  //           }

  //           el = el.parentElement;
  //         }

  //         if (isHoverable) {
  //           gsap.to(ball, {
  //             scale: 2.5,
  //             opacity: 0.4,
  //             duration: 0.3,
  //             ease: "power2.out",
  //           });
  //           gsap.to(dot, { scale: 0, duration: 0.3 });
  //         } else {
  //           gsap.to(ball, {
  //             scale: 1,
  //             opacity: 0.6,
  //             duration: 0.3,
  //             ease: "power2.out",
  //           });
  //           gsap.to(dot, { scale: 1, duration: 0.3 });
  //         }
  //       }
  //     };

  //     const ticker = () => {
  //       pos.x += (mouse.x - pos.x) * 0.1;
  //       pos.y += (mouse.y - pos.y) * 0.1;
  //       gsap.set(ball, { x: pos.x, y: pos.y });
  //     };

  //     gsap.ticker.add(ticker);
  //     window.addEventListener("mousemove", onMouseMove);

  //     // hide/show on window enter/leave
  //     const onMouseLeaveWindow = () => {
  //       gsap.to([dot, ball], { opacity: 0, duration: 0.3 });
  //     };
  //     const onMouseEnterWindow = () => {
  //       gsap.to(dot, { opacity: 1, duration: 0.3 });
  //       gsap.to(ball, { opacity: 0.6, duration: 0.3 });
  //     };

  //     document.addEventListener("mouseleave", onMouseLeaveWindow);
  //     document.addEventListener("mouseenter", onMouseEnterWindow);

  //     return () => {
  //       gsap.ticker.remove(ticker);
  //       window.removeEventListener("mousemove", onMouseMove);
  //       document.removeEventListener("mouseleave", onMouseLeaveWindow);
  //       document.removeEventListener("mouseenter", onMouseEnterWindow);
  //     };
  //   }, []);

  useCustomCursor(dotRef, ballRef);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed opacity-0 top-0 left-0 z-[9999] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="w-2 h-2 xl:w-3 xl:h-3  rounded-full bg-[#4CAF4F]" />
      </div>

      <div
        ref={ballRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div
          className="w-9 h-9 3xl:w-10 3xl:h-10 rounded-full border border-[#4CAF4F] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(76,175,79,0.15) 0%, transparent 70%)",
          }}
        />
      </div>
    </>
  );
}
