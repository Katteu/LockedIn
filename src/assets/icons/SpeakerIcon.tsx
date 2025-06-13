import React from "react";
import { IconProps } from "@/interfaces/common";

const SpeakerIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 0H10V20H8V18H6V16H8V4H6V2H8V0ZM4 6V4H6V6H4ZM4 14H0V6H4V8H2V12H4V14ZM4 14V16H6V14H4ZM14 8H12V12H14V8ZM16 6H18V14H16V6ZM16 14V16H12V14H16ZM16 4V6H12V4H16Z"
        fill={color}
      />
    </svg>
  );
};

export default SpeakerIcon;
