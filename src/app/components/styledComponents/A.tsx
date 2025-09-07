import { cn } from "@/utils/tailwind/cn";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  className?: string;
  variant?: "next";
  href?: string;
}

const A = ({ children, className, variant, href }: Props) => {
  
  if (variant === "next") {
    return (
      <Link className={cn(
        "",
        className
      )}
        href={href || ""}
        target="_blank" rel="noopener noreferrer"
      >{children}</Link>
    )
  }

  return (
    <a className={cn(
      "underline hover:font-bold",
      variant === "description" && "text-sm italic text-zinc-400",
      className
    )}
        href={href || ""}
      target="_blank" rel="noopener noreferrer"
    >{children}</a>
  )
}

export default A;