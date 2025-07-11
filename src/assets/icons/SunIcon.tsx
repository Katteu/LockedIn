import React from "react";
import { IconProps } from "@/interfaces/common";

const SunIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 10V14H16V15H15V16H14V17H10V16H9V15H8V14H7V10H8V9H9V8H10V7H14V8H15V9H16V10H17Z"
        fill={color}
      />
      <path
        d="M21 11V10H22V9H23V7H20V6H18V4H17V1H15V2H14V3H13V4H11V3H10V2H9V1H7V4H6V6H4V7H1V9H2V10H3V11H4V13H3V14H2V15H1V17H4V18H6V20H7V23H9V22H10V21H11V20H13V21H14V22H15V23H17V20H18V18H20V17H23V15H22V14H21V13H20V11H21ZM18 15H17V16H16V17H15V18H9V17H8V16H7V15H6V9H7V8H8V7H9V6H15V7H16V8H17V9H18V15Z"
        fill={color}
      />
    </svg>
  );
};

export default SunIcon;
