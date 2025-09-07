import MainLogo from "../MainLogo";
import NavMenu from "./NavMenu";
import Gutter from "../layout/Gutter";
import { Media } from "@/types/payload-types";
import Line from "../visuals/Line";

type Props = {
  logo?: Media | string | null;
}
const Header = ({logo} : Props) => {

  return (
    <header className="w-full flex flex-col">
      <Gutter>
        <div className="flex justify-center items-center w-full h-[8.5rem] md:px-12 md:justify-between">
          <div className="mr-auto opacity-0 md:hidden"/>
          <MainLogo image={typeof logo === "string" ? undefined : logo}/>
          <NavMenu
            className=""
          />
        </div>
      </Gutter>
      <Line orientation="horizontal"/>
    </header>
  );
};

export default Header;
