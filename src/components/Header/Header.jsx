import React from "react";
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  ResumeLink,
} from "./HeaderElements";

const Header = ({ toggle, logo, data }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav style={{ zIndex: "88" }}>
        <Logo to="/">
          {/* <img
            src="/logo.png"
            alt="logo"
          /> */}
          <h3 style={{ color: "white", fontSize: "28px", fontWeight: "600" }}>
            SRI NITHIN
          </h3>
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
          <ResumeLink href={"https://drive.google.com/file/d/1rv8wRuHUL0iFThnqtRSOvDmad5W-NHXN/view?usp=sharing"} target="_blank">
            Resume
          </ResumeLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;