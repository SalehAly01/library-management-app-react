import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";
import NavBarItem from "./NavBarItem";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="navbar navbar-dark fixed-top"
          expand="md"
          style={{
            backgroundColor: this.props.editMode ? "#6F1E51" : "#353b48"
          }}
        >
          <NavbarBrand tag={RRNavLink} to="/">
            Book Listing
            {this.props.editMode && (
              <Button size="sm" color="danger" className="ml-2" disabled>
                Edit Mode
              </Button>
            )}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mt-1" navbar>
              <NavBarItem name="Book" type="books" />
              <NavBarItem name="Author" type="authors" />
              <NavBarItem name="Category" type="categories" />
              <Button
                size="sm"
                color={this.props.editMode ? "info" : "danger"}
                className="mr-2 rounded"
                onClick={() => this.props.toggleEditStatus()}
              >
                {this.props.editMode ? "Exit Edit Mode" : "Edit Mode"}
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
