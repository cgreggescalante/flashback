import Link from "next/link";
import { Nav, Navbar, NavLink } from "react-bootstrap";

const Header = ({ links }: { links: any }) => (
  <Navbar bg={"secondary"}>
    <Nav>
      {links.map((link: any, index: number) => (
        <NavLink key={index} as={Link} href={link.path}>
          {link.name}
        </NavLink>
      ))}
    </Nav>
  </Navbar>
);

export default Header;
