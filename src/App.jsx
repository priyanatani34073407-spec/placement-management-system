import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import Student from "./pages/Student/Student";

function App() {
  // Sidebar Page Navigation
  const [page, setPage] = useState("dashboard");

  // Shared Student Data
  const [students, setStudents] = useState([]);

  return (
    <div className="app">
      <Navbar />

      <div className="main-container">
        <Sidebar setPage={setPage} />

        <div className="content">
          {page === "dashboard" && (
            <Dashboard students={students} />
          )}

          {page === "register" && (
            <Register
              students={students}
              setStudents={setStudents}
            />
          )}

          {page === "students" && (
            <Student
                students={students}
                setStudents={setStudents}
            />
          )}

          {page === "login" && (
            <Login />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;