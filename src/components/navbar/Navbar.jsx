import React from "react";
import { Nav, NavLinkContainer, NavList } from "./navbar.styles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavLinkContainer >
          <NavLink activeClassName='active-Link' exact to="/">Calander</NavLink>
        </NavLinkContainer>
        <NavLinkContainer>
          <NavLink activeClassName='active-Link' exact to="/events">Events</NavLink>
        </NavLinkContainer>
      </NavList>
    </Nav>
  );
};

export default Navbar;
