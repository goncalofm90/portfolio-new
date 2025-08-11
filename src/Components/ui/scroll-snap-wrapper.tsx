import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

interface ScrollSnapWrapperProps {
  children: ReactNode;
}


export default function ScrollSnapWrapper({ children }: ScrollSnapWrapperProps) {
  const isAnimatingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const lastDirectionRef = useRef(0);
  const touchStartY = useRef<number | null>(null);
  
  useEffect(() => {
    const sections = () => Array.from(document.querySelectorAll("section.snap-child"));
    const getCurrentIndex = () => {
      const idx = Math.round(window.scrollY / window.innerHeight);
      return Math.max(0, Math.min(idx, sections().length - 1));
    };

    const delayBeforeScroll = 0 // milliseconds delay to simulate "hold"
    const launchStiffness = 120;
    const launchDamping = 25;
    const launchMass = 0.5;

    
    function animateScroll(start: number, end: number): Promise<void> {
      return new Promise<void>((resolve) => {
        const controls = animate(start, end, {
          type: "spring",
          stiffness: launchStiffness,
          damping: launchDamping,
          mass: launchMass,
          onUpdate: (v) => window.scrollTo(0, v),
          onComplete: () => {
            controls.stop();
            resolve();
          },
        });
      });
    }

    async function scrollToIndex(index: number) {
      if (isAnimatingRef.current) return;
      const sec = sections();
      if (!sec.length) return;
      const target = Math.min(Math.max(0, index), sec.length - 1) * window.innerHeight;

      isAnimatingRef.current = true;
      const start = window.scrollY;

      await animateScroll(start, target);
      isAnimatingRef.current = false;
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimatingRef.current) return;

      const direction = Math.sign(e.deltaY);
      lastDirectionRef.current = direction;

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        const current = getCurrentIndex();

        if (direction > 0 && current < sections().length - 1) {
          scrollToIndex(current + 1);
        } else if (direction < 0 && current > 0) {
          scrollToIndex(current - 1);
        }
      }, delayBeforeScroll);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (isAnimatingRef.current || touchStartY.current === null) return;

      const endY = e.changedTouches[0].clientY;
      const delta = touchStartY.current - endY;
      const threshold = 40;
      const current = getCurrentIndex();

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      if (delta > threshold && current < sections().length - 1) {
        scrollTimeoutRef.current = setTimeout(() => scrollToIndex(current + 1), delayBeforeScroll);
      } else if (delta < -threshold && current > 0) {
        scrollTimeoutRef.current = setTimeout(() => scrollToIndex(current - 1), delayBeforeScroll);
      }

      touchStartY.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return <div>{children}</div>;
}
