import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../shadcn/sheet";
import { Menu } from "lucide-react";
import NavMenuList from "./NavMenuList";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const NavMenu = ({ className }: Props) => {
  return (
    <>
      <Sheet>
        <SheetTrigger className=" ml-auto mr-8 md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent className={twMerge("", className)} hideCloseButton>
          <SheetTitle className="hidden">Navigation Menu</SheetTitle>
          <SheetDescription className="hidden">
            Use this list to navigate between pages.
          </SheetDescription>
          <div className="flex items-center h-full">
            <NavMenuList className="flex-col" />
          </div>
        </SheetContent>
      </Sheet>
      <NavMenuList className={twMerge("max-md:hidden", className)}/>
    </>
  );
};

export default NavMenu;
