import React from "react";

interface SvgCubeProps {
  className?: string;
  classLeft?: string;
  classTop?: string;
  classRight?: string;
}

const SvgCube: React.FC<SvgCubeProps> = ({
  className = "",
  classLeft = "fill-red-600",
  classTop = "fill-red-300",
  classRight = "fill-red-500",
}) => {
  return (
    <svg
      width="142"
      height="162"
      viewBox="0 0 142 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 121L71 161V81L1 41V121Z"
        className={classLeft}
        strokeLinejoin="round"
        stroke="black"
        strokeWidth={2}
      />
      <path
        d="M1 41L71 1L141 41L71 81L1 41Z"
        className={classTop}
        strokeLinejoin="round"
        stroke="black"
        strokeWidth={2}
      />
      <path
        d="M141 121L71 161V81L141 41V121Z"
        className={classRight}
        strokeLinejoin="round"
        stroke="black"
        strokeWidth={2}
      />
    </svg>
  );
};

export default SvgCube;
