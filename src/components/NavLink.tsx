import { NavLink as NavLinkUnstyled } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(NavLinkUnstyled)`
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    &, &:visited {
        color: ${({theme}) => theme.textColor};
    }
    &:hover {
        color: ${({theme}) => theme.primaryColor};
    }
    &.active {
        color: ${({theme}) => theme.textColorContrast};
        background-color: ${({theme}) => theme.primaryColor};
    }
`;