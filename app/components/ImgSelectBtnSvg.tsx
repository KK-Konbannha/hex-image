// Code: ImgSelectBtnSvg component
"use client";
import { useState } from "react";
import { css } from "@/styled-system/css";

// Define props
type ImgSelectBtnSvgProps = Readonly<{
  isDisabled?: boolean;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}>;

// Define component
export default function ImgSelectBtnSvg({
  isDisabled,
  onClick,
}: ImgSelectBtnSvgProps) {
  const [isHovered, setIsHovered] = useState(false);
  const stroke = isDisabled ? "#D2D2D3" : isHovered ? "#636565" : "#707070";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      baseProfile="tiny"
      overflow="visible"
      viewBox="0 0 66 66"
      className={css({
        width: "100%",
        height: "100%",
        margin: "2",
        cursor: isDisabled ? "default" : "pointer",
        transition: ".3s",
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <path
        fill={isDisabled ? "#EEE" : "#FFF"}
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M20 2h26c9.9 0 18 8.1 18 18v26c0 9.9-8.1 18-18 18H20c-9.9 0-18-8.1-18-18V20c0-9.9 8.1-18 18-18z"
      />
      <circle
        cx={21.5}
        cy={19.5}
        r={5.5}
        fill="none"
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        fill="none"
        stroke={stroke}
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M20 64h26c9.9 0 18-8.1 18-18v-2.4c-2.1-3.2-4.2-5.9-6.3-8-4-4.2-7.8-6.3-11.2-6.3s-7.2 2.1-11.1 6.3c-2.9 3.1-5.8 7.2-8.8 12.3-3.6-4.7-7-7.1-9.9-7.1-2.1 0-4.4 1.2-6.9 3.7-2 2-4.1 4.8-6.2 8.4C8 64.3 20 64 20 64"
      />
    </svg>
  );
}
