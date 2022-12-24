import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} href="/">Home</NavLink>
            <NavLink as={Link} href="/about">About</NavLink>
            <NavLink as={Link} href="/charts/top_tracks">Top Tracks</NavLink>
            <NavLink as={Link} href="/charts/top_artists">Top Artists</NavLink>
        </Nav>
    </Navbar>
)

export default Header
