import React from "react";
import { NavLink } from "react-router-dom";

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
      </nav>
    </header>
  );
};

export default Header;
