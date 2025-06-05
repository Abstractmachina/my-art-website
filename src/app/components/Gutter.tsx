import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const Gutter = ({children, className}:Props) => {
  return (
    <div className={twMerge("sm:px-16 lg:px-40", className)}>{children}</div>
  )
}

export default Gutter;