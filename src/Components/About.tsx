import React from "react";
import { motion } from "framer-motion";
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
    <section className="relative bg-black min-h-screen w-full overflow-hidden snap-child lg:max-h-screen lg:h-screen">
      {/* Subtle gradient background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between max-w-full min-h-screen lg:h-full">
        {/* Left side text */}
        <div className="flex-1 py-12 px-4 sm:py-16 sm:px-6 lg:py-24 lg:px-8 xl:py-48 z-10 flex flex-col justify-center order-2 lg:order-1">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            Hello there,
          </motion.h1>
          
          <div className="px-1 mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-7 sm:leading-8 text-gray-300 font-thin">
            <FlipWords words={words} />
          </div>
          
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center sm:items-start gap-y-2 sm:gap-y-4">
            <TextHoverEffect 
              text="Gonçalo" 
              className="from-purple-400 via-blue-400 to-purple-300" 
            />
            <TextHoverEffect 
              text="Mendes" 
              className="from-purple-400 via-blue-400 to-purple-300" 
            />
          </div>
        </div>
        
        {/* Right side angled image */}
        <div className="flex justify-center items-center px-4 py-8 lg:py-0 order-1 lg:order-2">
          <Avatar />
        </div>
      </div>
    </section>
  );
};

export default About;