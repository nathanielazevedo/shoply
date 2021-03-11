import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'


function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/" className="link">
        Items
      </NavLink>
      <NavLink exact to="/cart" className="link">
        Cart
      </NavLink>
    </nav>
  );
}

export default NavBar;
