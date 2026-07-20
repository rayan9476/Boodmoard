import { useEffect, useRef, useState } from "react";

export function useCountUp(
  target,
  duration = 2000,
  startOnView = true,
  delay = 0,
  loaded = true,
  isLoaded = true,
  isRouteChanging = false,
) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  const parseValue = (val) => {
    const str = String(val).toUpperCase().replace("+", "").trim();
    if (str.includes("K")) return parseFloat(str) * 1000;
    if (str.includes("M")) return parseFloat(str) * 1000000;
    return parseFloat(str);
  };

  const formatValue = (val, original) => {
    const str = String(original).toUpperCase();
    const hasPlus = str.includes("+");

    if (str.includes("K")) {
      const t = parseFloat(str.replace("K", "").replace("+", ""));
      const current = val / 1000;
      const display = Number.isInteger(t)
        ? Math.round(current).toFixed(0)
        : current.toFixed(1);
      return display + "K" + (hasPlus ? "+" : "");
    }

    if (str.includes("M")) {
      const t = parseFloat(str.replace("M", "").replace("+", ""));
      const current = val / 1000000;
      const display = Number.isInteger(t)
        ? Math.round(current).toFixed(0)
        : current.toFixed(1);
      return display + "M" + (hasPlus ? "+" : "");
    }

    return Math.round(val).toString() + (hasPlus ? "+" : "");
  };

  const getSmartDuration = (val) => {
    const num = parseValue(val);
    if (num <= 10) return 1200;
    if (num <= 100) return 1200;
    if (num <= 1000) return 1200;
    return duration;
  };

  // useEffect(() => {
  //   if (isRouteChanging) {
  //     if (!isLoaded) return;
  //   } else {
  //     if (!loaded) return;
  //   }

  //   if (!startOnView) {
  //     const timer = setTimeout(() => setHasStarted(true), delay);
  //     return () => clearTimeout(timer);
  //   }

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting && !hasStarted) setHasStarted(true);
  //     },
  //     { threshold: 0.5 },
  //   );

  //   if (ref.current) observer.observe(ref.current);
  //   return () => observer.disconnect();
  // }, [hasStarted, startOnView, delay, loaded, isLoaded]);

  useEffect(() => {
    if (isRouteChanging) {
      if (!isLoaded) return;

      const timer = setTimeout(() => {
        if (!startOnView) {
          const timer = setTimeout(() => setHasStarted(true), 300);
          return () => clearTimeout(timer);
        }

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !hasStarted) setHasStarted(true);
          },
          { threshold: 0.5 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
      }, delay);

      return () => clearTimeout(timer);
    }

    if (!loaded) return;

    const timer = setTimeout(() => {
      if (!startOnView) {
        const timer = setTimeout(() => setHasStarted(true), 300);
        return () => clearTimeout(timer);
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) setHasStarted(true);
        },
        { threshold: 0.5 },
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, delay);

    return () => clearTimeout(timer);
  }, [hasStarted, startOnView, delay, loaded, isLoaded]);

  // useEffect(() => {
  //   if (isRouteChanging) {
  //     if (!isLoaded) return;
  //   } else {
  //     if (!loaded) return;
  //   }

  //   if (!hasStarted) return;

  //   const numericTarget = parseValue(target);
  //   const smartDuration = getSmartDuration(target);
  //   const startTime = performance.now();

  //   const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  //   let rafId;

  //   const tick = (now) => {
  //     const elapsed = now - startTime;
  //     const progress = Math.min(elapsed / smartDuration, 1);

  //     if (progress === 1) {
  //       // always snap to exact target on completion — no stray frames
  //       setCount(target);
  //       return;
  //     }

  //     const current = easeOut(progress) * numericTarget;
  //     setCount(formatValue(current, target));
  //     rafId = requestAnimationFrame(tick);
  //   };

  //   rafId = requestAnimationFrame(tick);

  //   return () => cancelAnimationFrame(rafId); // cleanup on unmount
  // }, [hasStarted, target, duration, loaded, isLoaded]);

  useEffect(() => {
    if (isRouteChanging) {
      if (!isLoaded) return;

      const timer = setTimeout(() => {
        if (!hasStarted) return;

        const numericTarget = parseValue(target);
        const smartDuration = getSmartDuration(target);
        const startTime = performance.now();

        const easeOut = (t) => 1 - Math.pow(1 - t, 3);

        let rafId;

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / smartDuration, 1);

          if (progress === 1) {
            // always snap to exact target on completion — no stray frames
            setCount(target);
            return;
          }

          const current = easeOut(progress) * numericTarget;
          setCount(formatValue(current, target));
          rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(rafId); // cleanup on unmount
      }, 300);

      return () => clearTimeout(timer);
    }

    if (!loaded) return;

    if (!hasStarted) return;

    const numericTarget = parseValue(target);
    const smartDuration = getSmartDuration(target);
    const startTime = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / smartDuration, 1);

      if (progress === 1) {
        // always snap to exact target on completion — no stray frames
        setCount(target);
        return;
      }

      const current = easeOut(progress) * numericTarget;
      setCount(formatValue(current, target));
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId); // cleanup on unmount
  }, [hasStarted, target, duration, loaded, isLoaded]);

  return { count, ref };
}
