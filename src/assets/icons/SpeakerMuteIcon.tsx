import React from "react";
import { IconProps } from "@/interfaces/common";

const SpeakerMuteIcon: React.FC<IconProps> = ({
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
      <path d="M10 0H8V2H6V4H4V6H0V14H4V16H6V18H8V20H10V0ZM6 16V14H4V12H2V8H4V6H6V4H8V16H6ZM16 9.223H14V7.223H12V9.223H14V11.223H12V13.223H14V11.223H16V13.223H18V11.223H16V9.223ZM16 9.223H18V7.223H16V9.223Z" fill={color} />
    </svg>

  );
};

export default SpeakerMuteIcon;
