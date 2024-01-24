import styled from "styled-components"
import { NavBar } from "./NavBar"
import { NavLink } from "./NavLink"
import { Link } from "react-router-dom"

const HeaderWrapper = styled.div`
    display: flex;    
    justify-content: space-between;
    align-items: center;    
`

const Logo = styled.div`
    font-size: 1rem;
    font-weight: 600;
    margin-right: 1rem;
    a, a:visited {
        color: ${({theme}) => theme.textColor};
        text-decoration: none;
    }
`

export function Header() {
    return <HeaderWrapper>
        <Logo><Link to={'/'}>FakeStore</Link></Logo>
        <NavBar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </NavBar>
    </HeaderWrapper>
}