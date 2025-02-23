import React from "react";
import logo from "../assets/logo.svg";
import { navMenuItems } from "../constants/constants";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-wrapper">
      <img src={logo} alt="logo-image" />
      <ul className="nav-menu-wrapper">
        {navMenuItems?.map((navMenu) => (
          <li key={navMenu?.menuName}>{navMenu?.menuName}</li>
        ))}
      </ul>
      <Button
        label="Connect With Me"
        className="nav-connect-btn"
        type="button"
      />
    </nav>
  );
};

export default Navbar;
