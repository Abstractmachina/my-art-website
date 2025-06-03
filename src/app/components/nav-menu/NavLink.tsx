import Link from "next/link";
import { Button } from "../shadcn/button";

type Props = {
  children?: React.ReactNode;
  href?: string;
}

const NavLink = ({children, href}:Props) => {
  return (
    <li>
      <Button asChild variant={"link"} className="text-xl font-light"> 
        <Link href={href || "/"}>
          {children}
        </Link>

      </Button>
    </li>
  )
}

export default NavLink;