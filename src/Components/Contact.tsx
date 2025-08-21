import React from "react";
import { Vortex } from "../Components/ui/vortex";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import GradientIconButton from "./ui/button";
import TechStackScroller from "./ui/tech-stack-scroller";

const socialLinks = [
  {
    icon: CiLinkedin,
    url: "https://www.linkedin.com/in/goncalo-mendes/",
  },
  {
    icon: FaGithub,
    url: "https://github.com/goncalofm90",
  },
  {
    icon: TbFileCv,
    url: "/CVGM2025.pdf",
    download: "CVGM2025.pdf",
  },
  {
    icon: MdEmail,
    url: "mailto:goncalofm90@gmail.com",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col">
      {/* Subtle gradient blobs for background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Vortex
        backgroundColor="black"
        className="relative flex flex-col items-center justify-between w-full min-h-screen px-4 py-10"
      >
        <div className="flex flex-col items-center justify-center text-center flex-1">
          <h2 className="text-3xl md:text-6xl font-thin bg-gradient-to-r text-white bg-clip-text text-transparent mb-6">
            Let’s Connect
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
            Have a project in mind or just want to say hello? <br />
            Reach out below and let’s build something amazing.
          </p>

          {/* Social Buttons */}
          <div className="flex flex-row items-center gap-4 sm:gap-6 mt-2 flex-wrap justify-center">
            {socialLinks.map((link, index) => (
              <GradientIconButton
                key={index}
                icon={link.icon}
                url={link.url}
                download={link.download}
                size={36}
              />
            ))}
          </div>
        </div>

        {/* Tech stack scroller */}
        <div className="w-full mt-10 mb-4">
          <TechStackScroller />
        </div>

        {/* Footer */}
        <div className="text-gray-500 text-xs sm:text-sm text-center w-full pb-2">
          © {new Date().getFullYear()} Gonçalo Mendes
        </div>
      </Vortex>
    </div>
  );
};

export default Contact;
