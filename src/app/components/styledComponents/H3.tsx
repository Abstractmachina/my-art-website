import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  className?: string;
}

const H3 = ({children, className}:Props) => {
  return (
    <h3 className={twMerge(
      "text-xl font-bold",
      className
    )}
    >
      {children}
    </h3>
  )
}

export default H3;