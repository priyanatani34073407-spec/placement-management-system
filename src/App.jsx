import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Register from "./pages/Registartion/Register";

//App.jsx  The root component 
//Initially Everything is displayed from here

//Creating the root component
//js ---HTML ----> JSX>
//JSX Is not undestand by browser 
//Babel will help to convert into JS
// const div=//Fragments <> ,</>
//     <>
//       <h1>WelCome To Chalapathi</h1>
//       <p>Learn Today And Lead Tommorow</p>
//       <h2>Placement Management System</h2>
//     </>


//Root components
function App() {
  const [students, setStudents] = useState(250);
  function addStudent() {
    setStudents(students + 1);
    console.log(students)
  }
  return (
    <>
      <Navbar />
      <div className="Main">
        <Sidebar />
        <div className="content">
          <h1>{students}</h1>
          <button onClick={addStudent}>Add Student</button>
          <Register /> 
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;