import { useEffect, useState } from "react";
import "./Dashboard.css";
import Clock from "../Clock/Clock";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [count, setCount] = useState(250);
  const [count1, setCount1] = useState(50);
  const [count2, setCount2] = useState(40);
  const [count3, setCount3] = useState(40);
  const [students, setStudents] = useState([]);

  // Check login status
  function loginStatus() {
    const status = localStorage.getItem("isLoggedIn");

    if (status === "true") {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (!loginStatus()) {
      navigate("/");
    }
  }, [navigate]);

  // Welcome message
  useEffect(() => {
    alert("Welcome Admin");
  }, []);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  function addStudents() {
    setStudents(["Rahul", "Ravi", "Anjali"]);
  }

  function add() {
    setCount(count + 1);
  }

  function add1() {
    setCount1(count1 + 1);
    console.log(count1);
  }

  function add2() {
    setCount2(count2 - 1);
    console.log(count2);
  }

  function add3() {
    setCount3(count3 + 1);
    console.log(count3);
  }

  return (
    <div className="card">
      <h1>Welcome Back</h1>

      <button onClick={handleLogout}>Logout</button>

      <Clock />

      <div className="card">
        <h2>{count}</h2>
        <button onClick={add}>Add Students</button>
        <button onClick={() => setCount(250)}>Reset Students</button>
        <p>Total Students</p>
      </div>

      <div className="card">
        <h2>{count1}</h2>
        <button onClick={add1}>Add Companies</button>
        <p>Companies</p>
      </div>

      <div className="card">
        <h2>{count2}</h2>
        <button onClick={add2}>Decrease</button>
        <p>Pending</p>
      </div>

      <div className="card">
        <h2>{count3}</h2>
        <button onClick={add3}>Increase</button>
        <p>Placed</p>
      </div>

      <div className="card">
        <button onClick={addStudents}>Students</button>

        <h3>Students Array</h3>

        {students.map((student, index) => (
          <p key={index}>{student}</p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
