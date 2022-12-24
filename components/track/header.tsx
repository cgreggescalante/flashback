import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} href="/track/all-time">All Time</NavLink>
            <NavLink as={Link} href="/track/by-year">By Year</NavLink>
        </Nav>
    </Navbar>
)

export default Header
