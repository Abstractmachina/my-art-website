import { Instagram } from "lucide-react";
import Gutter from "../layout/Gutter";
import { twMerge } from "tailwind-merge";
import Line from "../visuals/Line";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <footer className={twMerge("w-full h-40", className)}>
      <Line orientation="horizontal" />
      <Gutter className="w-full h-full">
        <div className="w-full flex justify-between items-center gap-4 h-full md:px-12">
          <span>&copy; 2025 Taole Chen</span>
          <a
            href="https://www.instagram.com/taole.chen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a href="mailto:me@taolechen.com">me@taolechen.com</a>
        </div>
      </Gutter>
    </footer>
  );
};

export default Footer;
