import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../../shadcn/sheet";
import { Menu } from "lucide-react";
import NavMenuList from "./NavMenuList";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  variant?: "mobile";
};

const NavMenu = ({ className, variant }: Props) => {
  
  if (variant === "mobile") {
    return (
      <Sheet>
        <SheetTrigger className=" ml-auto mr-4">
          <Menu className="h-6 w-6"/>
        </SheetTrigger>
        <SheetContent
          className={twMerge("", className)}
          hideCloseButton >
          <SheetTitle className="hidden">Navigation Menu</SheetTitle>
          <SheetDescription className="hidden">Use this list to navigate between pages.</SheetDescription>
          <div className="flex items-center h-full">
            <NavMenuList className="flex-col"/>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <NavMenuList className={twMerge("", className)}/>
  );
};

export default NavMenu;
