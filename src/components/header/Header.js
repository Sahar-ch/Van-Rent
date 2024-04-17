import React from "react";
import { NavLink, Link } from "react-router-dom";
import avatarIcon from "../../assets/images/avatar-icon.png";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header>
      <NavLink to="." className="site-logo">
        #VANLIFE
      </NavLink>

      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="host"
        >
          Host
        </NavLink>
        <Link to="/login" className="login-link">
          <img src={avatarIcon} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
