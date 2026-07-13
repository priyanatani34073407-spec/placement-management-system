import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">Menu</h2>

      <ul>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/register">Register Student</Link>
        </li>

        <li>
          <Link to="/student">Students</Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;