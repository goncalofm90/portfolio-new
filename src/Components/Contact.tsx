import React from "react";
import { Vortex } from "../Components/ui/vortex";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaReact } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import GradientIconButton from "./ui/button";
import RotatingIcon from "./ui/rotating-icon";
import TechStackScroller from "./ui/tech-stack-scroller";

const Contact: React.FC = () => {
  return (
    <div className="w-full h-screen rounded-md overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex flex-col justify-between items-center px-4 md:px-10 py-4 w-full h-full"
      >
        {/* Centered text + buttons */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl md:text-2xl font-thin text-center text-outline mb-4">
            Get in touch <RotatingIcon icon={FaReact} size={20} color="white" duration={3} />
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <GradientIconButton
              icon={CiLinkedin}
              url="https://www.linkedin.com/in/goncalo-mendes/"
            />
            <GradientIconButton
              icon={FaGithub}
              url="https://github.com/goncalofm90"
            />
            <GradientIconButton
              icon={TbFileCv}
              url="/CVGM2025.pdf"
              download="CVGM2025.pdf"
            />
          </div>
        </div>

        {/* Full-width tech stack scroller at the bottom */}
        <div className="w-full mt-6">
          <TechStackScroller />
        </div>
      </Vortex>
    </div>
  );
};

export default Contact;
