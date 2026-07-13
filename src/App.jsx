import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import Student from "./pages/Student/Student";

function App() {
  // Shared Student Data
  const [students, setStudents] = useState([
    {
      id: 1,
      studentName: "Natani Guna Sri Durgapriya",
      email: "23ht1a4380@gmail.com",
      mobile: "9876543210",
      branch: "CSE-AI",
      cgpa: "8.56",
      password: "Admin@123",
    },
    {
      id: 2,
      studentName: "Rahul Kumar",
      email: "rahul@gmail.com",
      mobile: "9876543211",
      branch: "CSE",
      cgpa: "8.91",
      password: "Rahul@123",
    },
    {
      id: 3,
      studentName: "Anjali Sharma",
      email: "anjali@gmail.com",
      mobile: "9876543212",
      branch: "ECE",
      cgpa: "9.12",
      password: "Anjali@123",
    },
  ]);

  return (
    <Routes>
      {/* Login */}
      <Route
        path="/"
        element={<Login students={students} />}
      />

      <Route
        path="/login"
        element={<Login students={students} />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={
          <>
            <Navbar />
            <Sidebar />
            <Register
              students={students}
              setStudents={setStudents}
            />
            <Footer />
          </>
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <>
            <Navbar />
            <Sidebar />
            <Dashboard students={students} />
            <Footer />
          </>
        }
      />

      {/* Student */}
      <Route
        path="/student"
        element={
          <>
            <Navbar />
            <Sidebar />
            <Student
              students={students}
              setStudents={setStudents}
            />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;