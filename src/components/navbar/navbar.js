import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Fa } from "mdbreact";

import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  changeColorOnScroll = () => {
        if (document.getElementsByClassName('navbar').style.backgroundColor !== "white") {
          document.getElementsByClassName('navlink').style.backgroundColor = "black"
        }
    }

  render() {
    return (
      <Router>
        <Navbar color="white" dark expand="md" style={{marginTop: "0px"}} fixed="top" scrolling transparent scrollingNavbarOffset={660}>
          <NavbarBrand>
            <strong className="g-font-unlock">Prince Ofori</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          {/* <NavbarNav left>
          <NavItem active>
            <NavLink to="#!">Home</NavLink>
          </NavItem>
        </NavbarNav> */}
        <NavbarNav right>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" size="lg" /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="linkedin" size="lg" /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="whatsapp" size="lg" /></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="envelope" size="lg" /></NavLink>
          </NavItem>
        </NavbarNav>
      </Collapse>
    </Navbar>
  </Router>
  );
}
}

export default NavbarPage;
