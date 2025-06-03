import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const H1 = ({children, className}:Props) => {
  return (
    <h1 className={twMerge(
      "text-3xl font-bold",
      className
    )}
    >
      {children}
    </h1>
  )
}

export default H1;