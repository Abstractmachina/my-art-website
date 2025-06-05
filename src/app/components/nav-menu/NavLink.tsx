import Link from "next/link";
import { Button } from "../shadcn/button";

type Props = {
  children?: React.ReactNode;
  href?: string;
  external?: boolean;
};

const NavLink = ({ children, href, external }: Props) => {
  return (
    <li>
      <Button asChild variant={"link"} className="text-xl font-light">
        {external ? (
          <a href={href || "/"} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <Link href={href || "/"}>{children}</Link>
        )}
      </Button>
    </li>
  );
};

export default NavLink;
