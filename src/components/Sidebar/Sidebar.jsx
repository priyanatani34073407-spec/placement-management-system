import "./Sidebar.css";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">
        Menu
      </h2>

      <ul>

        <li onClick={() => setPage("dashboard")}>
          📊 Dashboard
        </li>

        <li onClick={() => setPage("register")}>
          📝 Register Student
        </li>

        <li onClick={() => setPage("students")}>
          👨‍🎓 Students
        </li>

        <li onClick={() => setPage("login")}>
          🔐 Login
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;