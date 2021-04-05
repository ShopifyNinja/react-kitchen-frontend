import React from "react";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  Container,
} from "reactstrap";
import { hamburger, userProfile, close } from "../../assets/images";

function Header({ isOpen, toggle, toggleMenu, isShowMenu }) {
  const history = useHistory();
  const pathName = history.location.pathname;
  return (
    <header>
      <Container>
        <Navbar light expand="md">
          <NavbarBrand onClick={toggleMenu}>
            <img
              src={pathName === "/menu" ? close : hamburger}
              alt="hamburger"
            />
          </NavbarBrand>
          <NavbarToggler>
            <img src={userProfile} alt="userProfile" />
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <img src={userProfile} alt="userProfile" />
                </DropdownToggle>
                {/* <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu> */}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
