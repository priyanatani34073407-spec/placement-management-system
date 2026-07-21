import { NavLink , useNavigate} from "react-router-dom";
import "./Sidebar.css";
import Login from "../pages/Login/Login";

function Sidebar() {
  const navigate = useNavigate();
  
  function Logout() {
    localStorage.removeItem("isLoggedIn")
    navigate("/Login");
  }
  return (
    <ul className="sidebar">
      <NavLink
        to="/Dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Dashboard</li>
      </NavLink>

      <NavLink
        to="/Register"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Student Registration</li>
      </NavLink>

      <NavLink
        to="/students"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Students</li>
      </NavLink>

      <NavLink
        to="/companies"
        className={({ isActive }) => (isActive ? "active" : "")}
        >
      <li>Companies</li>
      </NavLink>
        
        <NavLink
          to="/company-registration"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Company Registration</li>
        </NavLink>

      <NavLink
        to="/Placements"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Placements</li>
      </NavLink>

      <NavLink
        to="/Reports"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Reports</li>
      </NavLink>

      <NavLink
        to="/Settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <li>Settings</li>
      </NavLink>

      <button onClick={Logout}>
        <li>Logout</li>
        </button>
      
    </ul>
  );
}

export default Sidebar;
