import React from "react";
import { Nav, NavLink, NavList } from "./navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavLink>
          <Link to="/">Calander</Link>
        </NavLink>
        <NavLink>
          <Link to="/events">Events</Link>
        </NavLink>
      </NavList>
    </Nav>
  );
};

export default Navbar;
