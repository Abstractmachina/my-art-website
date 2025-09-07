import Gutter from "@/app/components/layout/Gutter";
import Line from "@/app/components/visuals/Line";
import { cn } from "@/utils/tailwind/cn";
import React from "react";

type Props = {
  className?: string;
};

const DashedGutterOverlay = ({className}: Props) => {
  return (
    <Gutter className={cn(
      "fixed top-0 bottom-0 left-0 right-0 flex justify-between pointer-events-none bg-transparent",
      className
    )}>
      <Line />
      <Line />
    </Gutter>
  );
};

export default DashedGutterOverlay;
