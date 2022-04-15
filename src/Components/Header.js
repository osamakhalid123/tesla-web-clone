import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const [close, Setclose] = useState(false);

  return (
    <Container>
      <Logo src="images/logo.svg" alt="" />

      <Menu>
        <a href="https://www.tesla.com/">Model S</a>
        <a href="https://www.tesla.com/">Model 3</a>
        <a href="https://www.tesla.com/">Model X</a>
        <a href="https://www.tesla.com/">Model Y</a>
        <a href="https://www.tesla.com/">Solar Roof</a>
        <a href="https://www.tesla.com/">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="https://www.tesla.com/">Shop</a>
        <a href="https://www.tesla.com/">Account</a>
        {/* <button onClick={() => Setclose(true)}>Menu</button> */}
        <BurgerMenu onClick={() => Setclose(true)} />
      </RightMenu>

      <SideMenu show={close}>
        <CustomClose>
          <Close onClick={() => Setclose(false)} />
        </CustomClose>
        <ul>
          <li>Home</li>
          <li>Existing</li>
          <li>Inventory</li>
          <li>Used</li>
          <li>Inventory</li>
          <li>Trade-In Test</li>
          <li>Drive Cybertruck</li>
          <li>Roadster</li>
          <li>Semi</li>
          <li>Charging</li>
          <li>Powerwall</li>
          <li>Commercial Energy</li>
          <li>Utilities</li>
          <li>Find Us</li>
          <li>Support</li>
          <li>Investor Relations</li>
        </ul>
      </SideMenu>
    </Container>
  );
}

export default Header;

const CustomClose = styled.div`
  margin: 5px 15px;
  justify-content: flex-end;
  display: flex;
`;
const Close = styled(CloseIcon)`
  cursor: pointer;
`;
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
`;

const Logo = styled.img`
  margin: 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    color: rgb(23, 26, 32);
    font-weight: 600;
    margin-left: 20px;
    cursor: pointer;
    padding: 5px 12px;
  }
  a:hover {
    background-color: rgb(177, 187, 196);
    border-radius: 20px;
    transition: background-color 0.5s ease-in-out;
  }
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const BurgerMenu = styled(MenuIcon)`
  margin-left: 5px;

  cursor: pointer;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  a {
    color: rgb(23, 26, 32);
    font-weight: 600;
    margin-left: 5px;
    cursor: pointer;
    padding: 5px 10px;
  }
  a:hover {
    background-color: rgb(177, 187, 196);
    border-radius: 20px;
    transition: background-color 0.5s ease-in-out;
  }
`;

const SideMenu = styled.div`
  background-color: white;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  ul {
    padding: 20px;
  }
  li {
    padding: 15px 5px;
  }
  li:hover {
    cursor: pointer;
    background-color: rgb(177, 187, 196);
    border-radius: 20px;
    transition: background-color 0.5s ease-in-out;
  }
`;
