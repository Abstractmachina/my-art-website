import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
  variant?: "description";
}

const P = ({children, className, variant}:Props) => {
  return (
    <p className={twMerge(
      "",
      variant === "description" && "text-sm italic text-zinc-400",
      className
    )}
    >{children}</p>
  )
}

export default P;