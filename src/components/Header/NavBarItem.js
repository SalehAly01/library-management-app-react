import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import { NavItem, NavLink } from "reactstrap";

const NavBarItem = props => (
  <NavItem>
    <NavLink
      tag={RRNavLink}
      className="nav-link text-light bg-primary mr-2 rounded"
      to={`/${props.type}/new`}
      activeClassName="active"
    >
      New {props.name}
    </NavLink>
  </NavItem>
);

export default NavBarItem;
