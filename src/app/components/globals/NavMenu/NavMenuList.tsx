import { twMerge } from "tailwind-merge";
import NavLink from "./NavLink";

type Props = {
  className?: string;
}

const NavMenuList = ({className}:Props) => {
  return (
    <ul className={twMerge(
      "flex flex-row gap-2 text-lg", className)}>
      <NavLink href="/">Work</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="https://www.inprnt.com/gallery/taole.chen/" external>Prints</NavLink>
    </ul>
  )
}

export default NavMenuList;