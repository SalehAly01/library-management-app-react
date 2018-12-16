import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const Header = props => (
  <div>
    <Navbar
      className="navbar navbar-dark"
      expand="md"
      style={{ backgroundColor: props.editMode ? "#6F1E51" : "#353b48" }}
    >
      <NavbarBrand tag={RRNavLink} to="/">
        Book Listing
        {props.editMode && (
          <Button size="sm" color="danger" className="ml-2" disabled>
            Edit Mode
          </Button>
        )}
      </NavbarBrand>
      <Nav className="ml-auto" pills>
        <NavItem>
          <NavLink
            tag={RRNavLink}
            className="nav-link"
            to="/books/new"
            activeClassName="active"
          >
            New Book
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={RRNavLink}
            className="nav-link"
            to="/authors/new"
            activeClassName="active"
          >
            New Author
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag={RRNavLink}
            className="nav-link"
            to="/categories/new"
            activeClassName="active"
          >
            New Category
          </NavLink>
        </NavItem>
        <Button
          size="sm"
          color={props.editMode ? "info" : "danger"}
          className="ml-2"
          onClick={() => props.toggleEditStatus()}
        >
          {props.editMode ? "Exit Edit Mode" : "Edit Mode"}
        </Button>
      </Nav>
    </Navbar>
  </div>
);

export default Header;
