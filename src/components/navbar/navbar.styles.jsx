import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #ededed;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const NavLinkContainer = styled.li`
  padding: 0 25px;
  a {
    color: #333;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    position: relative;
  }

  .active-Link {
    color: #ff9100;
    padding: 0 15px;

    ::after {
      content: "";
      width: 100%;
      position: absolute;
      height: 2px;
      background-color: #ff9100;
      right: 0;
      left: 0;
      margin: auto;
      top: 37px;
    }
  }
`;
