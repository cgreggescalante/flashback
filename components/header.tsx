import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} href="/">Home</NavLink>
            <NavLink as={Link} href="/about">About</NavLink>
        </Nav>
    </Navbar>
)

export default Header
