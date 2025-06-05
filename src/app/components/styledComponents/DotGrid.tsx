import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

const DotGrid = ({className}:Props) => {
  return (
    <div className={twMerge("fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#dfdfdf_1px,transparent_1px)] [background-size:16px_16px]",
      className
    )}></div>
  )
}

export default DotGrid;