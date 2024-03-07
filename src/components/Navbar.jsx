import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Project RBN.</Link>
      </div>

      <div className="navbar-nav">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
