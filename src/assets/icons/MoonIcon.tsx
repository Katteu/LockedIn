import React from "react";
import { IconProps } from "@/interfaces/common";

const MoonIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20 16V18H19V19H18V20H16V21H14V22H8V21H6V20H4V19H3V18H2V16H1V14H0V8H1V6H2V4H3V3H4V2H6V1H8V0H13V1H11V2H9V3H8V5H7V7H6V11H7V13H8V15H9V16H11V17H13V18H17V17H19V16H20Z" fill={color} />
    </svg>
  );
};

export default MoonIcon;
