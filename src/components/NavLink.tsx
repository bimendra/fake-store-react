import { NavLink as NavLinkUnstyled } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(NavLinkUnstyled)`
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    color: ${({theme}) => theme.textColor};
    &:hover {
        color: ${({theme}) => theme.primaryColor};
    }
    &.active {
        color: ${({theme}) => theme.textColorContrast};
        background-color: ${({theme}) => theme.primaryColor};
    }
`;