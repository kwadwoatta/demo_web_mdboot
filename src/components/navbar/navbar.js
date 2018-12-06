import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Fa, Animation } from "mdbreact";

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
        <Navbar color="black" dark expand="md" style={{marginTop: "0px"}} fixed="top" scrolling transparent>
          <Animation type="lightSpeedIn" delay="1s" reveal>
              <NavbarBrand>
                  <strong className="g-font-unlock">Prince Ofori</strong>
              </NavbarBrand>
          </Animation>
          <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          {/* <NavbarNav left>
          <NavItem active>
            <NavLink to="#!">Home</NavLink>
          </NavItem>
        </NavbarNav> */}
        <NavbarNav right>
          <Animation type="flipInY" delay="2s" reveal>
            <NavItem>
              <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" size="lg" /></NavLink>
            </NavItem>
          </Animation>
          
          <Animation type="flipInX" delay="2.5s" reveal>
            <NavItem>
              <NavLink className="waves-effect waves-light" to="#!"><Fa icon="linkedin" size="lg" /></NavLink>
            </NavItem>
          </Animation>
          
          <Animation type="flipInY" delay="3s" reveal>
            <NavItem>
              <NavLink className="waves-effect waves-light" to=""><Fa icon="whatsapp" size="lg" /></NavLink>
            </NavItem>
          </Animation>
          
          <Animation type="flipInY" delay="3.5s" reveal>
            <NavItem>
              <NavLink className="waves-effect waves-light" to="mailto:princeofori065@gmail.com"><Fa icon="envelope" size="lg" /></NavLink>
            </NavItem>
          </Animation>
          
        </NavbarNav>
      </Collapse>
    </Navbar>
  </Router>
  );
}
}

export default NavbarPage;
