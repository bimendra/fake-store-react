import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
`

export function NavBar({ children }) {
    return (<Nav>{ children }</Nav>);
}