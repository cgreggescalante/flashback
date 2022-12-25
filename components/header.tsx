import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = ({ links } : { links: any }) => (
    <Navbar>
        <Nav>
            {
                links.map((link: any, index: number) => (
                    <NavLink key={index} as={Link} href={link.path}>{link.name}</NavLink>
                ))
            }
        </Nav>
    </Navbar>
)

export default Header
