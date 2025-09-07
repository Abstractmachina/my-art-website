import { cn } from "@/utils/tailwind/cn";
import React from "react";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

const Line = ({ className, orientation }: Props) => {
  if (orientation === "horizontal") {
    return (
      <svg
        width="100%"
        height="1"
        className={cn("", className)}
      >
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="rgb(0,0,0)"
          strokeWidth="0.5px"
          strokeDasharray={"10 10"}
        />
      </svg>
    );
  }

  return (
    <svg
      width="1"
      height="100%"
      className={cn("", className)}
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="100%"
        stroke="rgb(0,0,0)"
        strokeWidth="0.5px"
        strokeDasharray={"10 10"}
      />
    </svg>
  );
};

export default Line;

/***
 * html {
  --t: 2px;   thickness of the lines 
  --g: 50px; /* gap between lines 
  --s: 12px; /* size of the dashes
  
  background:
    conic-gradient(at var(--t),#0000 75%,#000 0)
    var(--g)/calc(var(--g) + var(--t)) var(--s);
}
 */
