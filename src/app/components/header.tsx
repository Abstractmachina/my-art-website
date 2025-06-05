"use client";

import useBreakpoint from "use-breakpoint";
import MainLogo from "./MainLogo";
import NavMenu from "./nav-menu";
import BREAKPOINTS from "@/BREAKPOINTS";
import Gutter from "./Gutter";
import { Media } from "@/types/payload-types";

type Props = {
  logo?: Media | string | null;
}
const Header = ({logo} : Props) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <header>
      <Gutter className="flex justify-center md:justify-between items-center w-full h-[8.5rem]">
        <MainLogo image={typeof logo === "string" ? undefined : logo}/>
        <NavMenu
          className="max-md:hidden mt-4"
          variant={breakpoint === "mobile" ? "mobile" : undefined}
        />
      </Gutter>
    </header>
  );
};

export default Header;
