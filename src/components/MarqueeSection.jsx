import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

import figma from "../assets/figma.svg";
import adobe from "../assets/adobe.svg";
import anthropic from "../assets/anthropic.svg";
import dropbox from "../assets/dropbox.svg";
import ember from "../assets/ember.svg";
import github from "../assets/github.svg";
import meta from "../assets/meta.svg";
import notion from "../assets/notion.svg";

const logos = [figma, adobe, anthropic, dropbox, ember, github, notion];

function wrap(min, max, value) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

function MarqueeRow({ reverse = false, speed = 80 }) {
  const trackRef = useRef(null);
  const baseX = useMotionValue(0);
  const [groupWidth, setGroupWidth] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setGroupWidth(trackRef.current.offsetWidth / 2);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, []);

  const x = useTransform(baseX, (latest) => {
    if (!groupWidth) return "0px";
    return `${wrap(-groupWidth, 0, latest)}px`;
  });

  useAnimationFrame((_, delta) => {
    if (!groupWidth) return;
    const move = (speed * delta) / 1000;
    baseX.set(baseX.get() + (reverse ? move : -move));
  });

  const LogoGroup = () => (
    <div className="flex">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex h-20 3xl:h-30 w-36 shrink-0 items-center justify-center mr-0 lg:mr-20 3xl:mr-40"
        >
          <img
            src={logo}
            alt=""
            draggable={false}
            className="h-10  lg:h-20 3xl:h-30 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 select-none cursor-pointer"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max will-change-transform"
      >
        <LogoGroup />
        <LogoGroup />
      </motion.div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden bg-black lg:py-24">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <MarqueeRow speed={80} />

      <div className=" mt-10 lg:mt-20 3xl:mt-30">
        <MarqueeRow reverse speed={80} />
      </div>
    </section>
  );
}
