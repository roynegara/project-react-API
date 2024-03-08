import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Project RBN.</Link>
      </div>

      <div className={`navbar-nav ${isOpen ? "active" : ""}`}>
        <Link active to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon">&#9776;</span>
      </button>
    </nav>
  );
};

export default Navbar;
