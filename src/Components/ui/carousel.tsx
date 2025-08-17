import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
  url: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => frameRef.current && cancelAnimationFrame(frameRef.current);
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

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  const id = useId();

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12">
      <div className="relative flex items-center justify-center">
        {/* Left Navigation Control */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <CarouselControl
            type="previous"
            onClick={handlePreviousClick}
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
                handleSlideClick={handleSlideClick}
              />
            ))}
          </ul>
        </div>

        {/* Right Navigation Control */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <CarouselControl
            type="next"
            onClick={handleNextClick}
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

// Example usage with sample data
const sampleSlides = [
  {
    title: "Beautiful Landscape",
    button: "Explore",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    url: "https://unsplash.com"
  },
  {
    title: "City Architecture",
    button: "Discover",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    url: "https://unsplash.com"
  },
  {
    title: "Ocean Waves",
    button: "View More",
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
    url: "https://unsplash.com"
  },
  {
    title: "Mountain Peak",
    button: "Adventure",
    src: "https://images.unsplash.com/photo-1464822759844-d150baec7296?w=800&h=600&fit=crop",
    url: "https://unsplash.com"
  }
];

// Demo component
function CarouselDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Enhanced Carousel
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Featuring side navigation controls inspired by timeline components and elegant dot indicators for better user experience.
        </p>
      </div>
      <Carousel slides={sampleSlides} />
    </div>
  );
}

export { CarouselDemo };