import { useEffect, useState, useRef } from "react";

export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState("up");
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY.current) < threshold) {
        ticking = false;
        return;
      }
      setDirection(scrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
