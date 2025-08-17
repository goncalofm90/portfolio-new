import React from "react";

interface RotatingIconProps {
  icon: React.ElementType; // React icon component
  size?: number | string;
  color?: string;
  duration?: number; // rotation duration in seconds
}

const RotatingIcon: React.FC<RotatingIconProps> = ({
  icon: Icon,
  size = 40,
  color = "white",
  duration = 2,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      <Icon size={size} color={color} />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default RotatingIcon;
