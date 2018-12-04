import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa } from "mdbreact";


import { BrowserRouter as Router } from "react-router-dom";


class NavbarPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <Router>
        <Navbar color="default-color" dark expand="md" style={{marginTop: "0px"}} fixed="top" scrolling transparent>
          <NavbarBrand>
            <strong className="white-text">Portfolio</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <NavbarNav left>
          <NavItem active>
            <NavLink to="#!">Home</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink to="#!">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#!">Pricing</NavLink>
          </NavItem> */}
          <NavItem>
            <Dropdown>
              <DropdownToggle nav caret>
                <div className="d-none d-md-inline">Dropdown</div>
              </DropdownToggle>
              <DropdownMenu className="dropdown-default"right>
                <DropdownItem href="#!">Action</DropdownItem>
                <DropdownItem href="#!">Another Action</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </NavbarNav>
        <NavbarNav right>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
          </NavItem>
          {/* <NavItem>
            <Dropdown>
              <DropdownToggle nav caret>
                <Fa icon="user" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-default" right>
                <DropdownItem href="#!">Action</DropdownItem>
                <DropdownItem href="#!">Another Action</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
                <DropdownItem href="#!">Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem> */}
        </NavbarNav>
      </Collapse>
    </Navbar>
  </Router>
  );
}
}

export default NavbarPage;
