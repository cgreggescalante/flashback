import {Nav, Navbar, NavLink} from "react-bootstrap";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
        </Nav>
    </Navbar>

)

export default Header
