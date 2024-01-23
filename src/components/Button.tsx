import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.textColorContrast};
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 16px 24px;
  border: none;  
  font-family: inherit;
  cursor: pointer;
  text-transform: uppercase;
  &[disabled] {
    background-color: ${({ theme }) => theme.disabledColor};
    cursor: default;
  }
  :not([disabled])&:hover {
    background-color: ${({ theme }) => theme.primaryColorHover};
  }
  :not([disabled])&:active  {
    background-color: ${({ theme }) => theme.PrimaryColorActive};
  }
`