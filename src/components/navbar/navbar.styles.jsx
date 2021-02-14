import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const NavLink = styled.li`
  padding: 0 15px;
  a {
    color: #333;
    font-size: 16px;
    text-decoration: none;
  }
`;
