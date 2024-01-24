import styled from "styled-components";
import { NavLink } from "./NavLink";

const Nav = styled.nav`
    display: flex;
`
export function NavBar() {
    return (
    <Nav>        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
    </Nav>);
}