import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

//NavBar component with links to items and cart.

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
