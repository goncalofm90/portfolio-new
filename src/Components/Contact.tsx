import React from "react";
import { Vortex } from "../Components/ui/vortex";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import GradientIconButton from "./ui/button";

const Contact: React.FC = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-8xl md:text-8xl text-center text-outline">
          Get in touch
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
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
      </Vortex>
    </div>
  );
};

export default Contact;
