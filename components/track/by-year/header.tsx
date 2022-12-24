import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} href="/track/by-year/2022">2022</NavLink>
            <NavLink as={Link} href="/track/by-year/2021">2021</NavLink>
            <NavLink as={Link} href="/track/by-year/2020">2020</NavLink>
            <NavLink as={Link} href="/track/by-year/2019">2019</NavLink>
        </Nav>
    </Navbar>
)

export default Header
