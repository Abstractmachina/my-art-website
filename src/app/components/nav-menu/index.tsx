import { twMerge } from "tailwind-merge";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../shadcn/sheet";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";

type Props = {
  className?: string;
  variant?: "mobile";
};

const NavMenu = ({ className, variant }: Props) => {
  
  if (variant === "mobile") {
    return (
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <ul className={twMerge(
      "flex flex-row gap-2 text-lg", className)}>
      <NavLink href="/">Work</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/prints">Prints</NavLink>
    </ul>
  );
};

export default NavMenu;
