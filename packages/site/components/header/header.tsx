import Link from "next/link";
import { Nav, Navbar, NavLink } from "react-bootstrap";

import style from "./header.module.scss";

const Header = ({ links }: { links: any }) => (
  <Navbar className={style.navbar}>
    <Nav>
      {links.map((link: any, index: number) => (
        <NavLink className={style.navlink} key={index} as={Link} href={link.path}>
          {link.name}
        </NavLink>
      ))}
    </Nav>
  </Navbar>
);

export default Header;
