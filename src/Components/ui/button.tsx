import React from "react";

interface GradientIconButtonProps {
  icon: React.ElementType;
  url?: string;
  size?: number;
  onClick?: () => void;
  download?: string;
}

const GradientIconButton: React.FC<GradientIconButtonProps> = ({
  icon: Icon,
  url,
  onClick,
  download,
}) => {
  const Component = url ? "a" : "button";

  return (
    <Component
      href={url}
      onClick={onClick}
      target={url && !download ? "_blank" : undefined}
      rel={url && !download ? "noopener noreferrer" : undefined}
      download={download}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden 
                 text-base font-medium text-gray-900 rounded-lg group 
                 bg-gradient-to-br from-purple-600 to-blue-500 
                 group-hover:from-purple-600 group-hover:to-blue-500 
                 hover:text-white dark:text-white 
                 focus:ring-4 focus:outline-none
                 outline-none
                 transform transition-all duration-200 hover:scale-110"
    >
      <span
        className="relative px-4 py-1 transition-all ease-in duration-75 
                   bg-white dark:bg-black rounded-md 
                   group-hover:bg-transparent group-hover:dark:bg-transparent"
      >
        <Icon size={22} />
      </span>
    </Component>
  );
};

export default GradientIconButton;
