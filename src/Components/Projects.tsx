import { useRef } from "react";
import Carousel from "../Components/ui/carousel";
import ScrollIndicator from "../Components/ui/scroll-indicator";

import {
  Foodi3,
  MonarchCocktailBar,
  SteveTearle,
  HellOnEarth,
  AlexMoraisBass,
  ReelDock,
} from "./ui/slide-data";

export default function Projects() {
  const slides = [
    Foodi3,
    MonarchCocktailBar,
    SteveTearle,
    HellOnEarth,
    AlexMoraisBass,
    ReelDock,
  ];
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative overflow-hidden w-full h-full py-20 bg-black">
      {/* Hero Section */}
      <div className="min-h-screen w-full snap-start flex items-center justify-center bg-black relative overflow-hidden px-4">
        {/* Text Content */}
        <div className="text-center space-y-8 max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-thin bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A showcase of my work, from web applications to innovative
            solutions, demonstrating my skills across the full technology stack.
          </p>

          {/* Scroll Down Indicator */}
          <ScrollIndicator
            onClick={() => {
              carouselRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Carousel Section */}
      <div ref={carouselRef}>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
