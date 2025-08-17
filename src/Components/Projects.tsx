
;import Carousel from "../Components/ui/carousel";
import {
  MonarchCocktailBar,
  SteveTearle,
  HellOnEarth,
  AlexMoraisBass
} from "./ui/slide-data";

export default function Projects() {
    const slides = [MonarchCocktailBar,SteveTearle, HellOnEarth, AlexMoraisBass ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <h1 className="text-6xl md:text-6xl lg:text-2xl font-thin text-center text-white mb-10">
        Projects</h1>
      <Carousel slides={slides} />
    </div>
  );
}
