import monarch from "../../assets/images/monarch.jpg";
import hellonearth from "../../assets/images/hellonearth.png";
import alexmoraisbass from "../../assets/images/bass.avif";
import stevetearl from "../../assets/images/steve.avif";

interface SlideData {
  title: string;
  button: string;
  src: string;
  url: string;
}

export const MonarchCocktailBar: SlideData = {
  title: "Monarch Cocktail Bar",
  button: "Explore",
  src: monarch,
  url: "https://the-monarch-cocktail-bar.vercel.app/"
};

export const SteveTearle: SlideData = {
  title: "Steve Tearle Portfolio App",
  button: "Explore",
  src: stevetearl,
  url: "https://stevetearle.com/"
};

export const HellOnEarth: SlideData = {
  title: "Hell on Earth Game",
  button: "Explore",
  src: hellonearth,
  url: "https://hell-on-earth.netlify.app/"
};

export const AlexMoraisBass: SlideData = {
  title: "Alex Morais Bass",
  button: "Explore",
  src: alexmoraisbass,
  url: "https://alexmoraisbass.netlify.app/"
};


