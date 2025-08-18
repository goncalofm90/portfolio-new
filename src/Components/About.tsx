import React from "react";
import { TextHoverEffect } from "../Components/ui/text-hover-effect";
import { FlipWords } from "../Components/ui/flip-words";
import { Avatar } from "../Components/ui/avatar";

const About: React.FC = () => {
  const words: string[] = [
    "As a full-stack developer with many years of experience,",
    "I have worked in quite a few projects of all stacks and sizes.",
    `I have a passion for making ideas come to life using tech (and coffee).`,
  ];

  return (
    <section className="relative bg-black min-h-screen max-h-screen w-full overflow-hidden snap-child h-screen">
      {/* Subtle gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="lg:flex w-full justify-between max-w-full">
        {/* Left side text */}
        <div className="flex-1 py-24 lg:py-48 lg:px-8 px-6 z-10">
          <h1 className="text-4xl sm:text-6xl font-thin bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent">
            Hello there,
          </h1>
          <div className="px-1 mt-6 text-2xl sm:text-3xl leading-8 text-gray-300 font-thin">
            <FlipWords words={words} />
          </div>
          <div className="mt-10 flex flex-col items-center sm:items-start gap-y-4">
            <TextHoverEffect text="Gonçalo" className="from-purple-400 via-blue-400 to-purple-300" />
            <TextHoverEffect text="Mendes" className="from-purple-400 via-blue-400 to-purple-300" />
          </div>
        </div>
        {/* Right side angled image */}
        <Avatar />
      </div>
    </section>
  );
};

export default About;
