import { Instagram } from "lucide-react";
import Gutter from "../layout/Gutter";
import { Separator } from "../shadcn/ui/separator";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

const Footer = ({className}:Props) => {
  return (
    <footer className={twMerge("w-full h-40 pt-12 ", className)}>
      <Gutter className="w-full h-full">
        <Separator />
        <div className="w-full flex justify-between items-center gap-4 h-full ">
        <span>&copy; 2025 Taole Chen</span>
        <a href="https://www.instagram.com/taole.chen/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
        <a href="mailto:me@taolechen.com">me@taolechen.com</a>
        </div>

      </Gutter>
    </footer>
  )
}

export default Footer;