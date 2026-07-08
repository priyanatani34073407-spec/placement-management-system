import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Registartion/Register";

function App() {
  const [students, setStudents] = useState(250);

  const addStudent = () => {
    setStudents((prevStudents) => prevStudents + 1);
  };

  return (
    <>
      <Navbar />

      <div className="main-container">
        <Sidebar />

        <div className="content">

          <div className="dashboard">
            <h2>Total Students</h2>
            <h1>{students}</h1>

            <button onClick={addStudent}>
              Add Student
            </button>
          </div>

          <Register />

        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;