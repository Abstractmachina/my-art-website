"use client";

import useBreakpoint from "use-breakpoint";
import MainLogo from "./MainLogo";
import NavMenu from "./nav-menu";
import BREAKPOINTS from "@/BREAKPOINTS";

const Header = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  return (
    <header className="flex justify-center md:justify-between items-center w-full h-40">
      <MainLogo />
      <NavMenu className="max-md:hidden" variant={breakpoint === "mobile" ? "mobile" : undefined}/>
    </header>
  );
};

export default Header;
