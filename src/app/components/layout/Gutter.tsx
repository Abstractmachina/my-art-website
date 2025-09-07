import { cn } from "@/utils/tailwind/cn";

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const Gutter = ({children, className}:Props) => {
  return (
    <div className={cn("gutter px-4 sm:px-16 lg:px-40", className)}>{children}</div>
  )
}

export default Gutter;