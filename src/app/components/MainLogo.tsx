import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

const MainLogo = ({className}:Props) => {
  return (
    <div className={twMerge(
      "flex justify-center h-20 items-center w-40",
      className)}
    >
      taole chen
    </div>
  )
}

export default MainLogo;