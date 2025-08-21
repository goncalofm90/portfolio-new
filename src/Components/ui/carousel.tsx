import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect, useCallback } from "react";

interface SlideData {
  title: string;
  button?: string;
  src: string;
  url: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
}

const Slide = ({ slide, index, current }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title, url } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d] focus:outline-none">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full rounded-[1%] overflow-hidden focus:outline-none focus:outline-none"
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] transition-all duration-150 ease-out"
            style={{
              transform:
                current === index
                  ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                  : "none",
            }}
          >
            <img
              className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
              style={{ opacity: current === index ? 1 : 0.5 }}
              alt={title}
              src={src}
              onLoad={imageLoaded}
              loading="eager"
              decoding="sync"
            />
            {current === index && (
              <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
            )}
          </div>

          <article
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                current === index ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            >
            <h2 className="text-base md:text-lg lg:text-xl font-thin text-center">
                {title}
            </h2>
          </article>
        </a>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  onClick: () => void;
  disabled?: boolean;
}

const CarouselControl = ({ type, onClick, disabled }: CarouselControlProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group relative w-12 h-12 rounded-full 
        bg-white dark:bg-black
        border border-neutral-300 dark:border-neutral-700
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-out
        hover:scale-110 hover:-translate-y-1
        active:scale-105 active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0
      `}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center justify-center w-full h-full">
        {type === "previous" ? (
          <IconChevronLeft className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
        ) : (
          <IconChevronRight className="w-5 h-5 text-neutral-600 dark:text-neutral-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
        )}
      </div>
    </button>
  );
};

interface DotIndicatorProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

const DotIndicator = ({ total, current, onDotClick }: DotIndicatorProps) => {
  return (
    <div className="flex justify-center items-center space-x-3 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`
            relative w-3 h-3 rounded-full transition-all duration-300 ease-out
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
            hover:scale-125
            ${current === index 
              ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg" 
              : "bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500"
            }
          `}
        >
          {current === index && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" />
          )}
        </button>
      ))}
    </div>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleDotClick = (index: number) => setCurrent(index);

  // Swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;
    let isDragging = false;
    let wheelTimeout: number | null = null;

    const SWIPE_THRESHOLD = 50; // pixels
    const WHEEL_COOLDOWN = 200; // ms

    // ---- Pointer drag ----
    const onPointerDown = (e: PointerEvent) => {
      startX = e.clientX;
      isDragging = true;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const diff = e.clientX - startX;

      if (diff > SWIPE_THRESHOLD) {
        nextSlide();   // swipe right → next
        isDragging = false;
      } else if (diff < -SWIPE_THRESHOLD) {
        prevSlide();   // swipe left → prev
        isDragging = false;
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // ---- Wheel scroll ----
    const onWheel = (e: WheelEvent) => {
      if (wheelTimeout) return;

      if (Math.abs(e.deltaX) > 20) {
        if (e.deltaX > 0) nextSlide();
        else prevSlide();

        wheelTimeout = setTimeout(() => {
          wheelTimeout = null;
        }, WHEEL_COOLDOWN);
      }
    };

    // ---- Attach listeners ----
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("wheel", onWheel);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("wheel", onWheel);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [nextSlide, prevSlide]); // run once, assume nextSlide/prevSlide are stable

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12" ref={containerRef}>
      <div className="relative flex items-center justify-center overflow-visible">
        {/* Left Navigation Control */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <CarouselControl
            type="previous"
            onClick={prevSlide}
          />
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-[70vmin] h-[70vmin] mx-auto"
          aria-labelledby={`carousel-heading-${id}`}
        >
          <ul
            className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <Slide
                key={index}
                slide={slide}
                index={index}
                current={current}
              />
            ))}
          </ul>
        </div>

        {/* Right Navigation Control */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <CarouselControl
            type="next"
            onClick={nextSlide}
          />
        </div>
      </div>

      {/* Bottom Dot Indicators */}
      <DotIndicator
        total={slides.length}
        current={current}
        onDotClick={handleDotClick}
      />
    </div>
  );
}