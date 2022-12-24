import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} href="/">Home</NavLink>
            <NavLink as={Link} href="/track/all-time">Top Tracks</NavLink>
            <NavLink as={Link} href="/artist/all-time">Top Artists</NavLink>
        </Nav>
    </Navbar>
)

export default Header
