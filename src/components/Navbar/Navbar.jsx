import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Placement Management System</h2>
      <div className="nav-links">
        <Link to="/dashboard">
          Dashboard
        </Link>
        <Link to="/student">
          Students
        </Link>
        <Link to="/register">
          Register
        </Link>
        <Link to="/login">
          Logout
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;