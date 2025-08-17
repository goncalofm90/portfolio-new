import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";

const stackIcons = [
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
];

const TechStackScroller: React.FC<{ size?: number; speed?: number }> = ({
  size = 40,
  speed = 20, // seconds per loop
}) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex animate-marquee"
        style={{ gap: "2rem", width: "max-content" }}
      >
        {[...stackIcons, ...stackIcons, ...stackIcons, ...stackIcons].map((Icon, idx) => (
          <Icon key={idx} size={size} className="text-white" />
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); } /* scroll exactly one set */
          }

          .animate-marquee {
            display: flex;
            animation: marquee ${speed}s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TechStackScroller;
