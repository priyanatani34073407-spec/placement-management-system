import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {

  // Number States
  const [students, setStudents] = useState(250);
  const [companies, setCompanies] = useState(33);
  const [placed, setPlaced] = useState(80);

  // String State
  const [name, setName] = useState("Lucky");

  // Boolean State
  const [login, setLogin] = useState(false);

  // Array State
  const [studentsList, setStudentsList] = useState([]);

  // Object State
  const [student, setStudent] = useState({
    name: "N.Guna Sri",
    course: "CAI",
  });

  // Load Student List
  function addStudent() {
    setStudentsList([
      "Shanmukh",
      "Rahul",
      "Ravi",
      "Anjali",
      "Gunasri"
    ]);
  }

  // Change Object
  function changeStudent() {
    setStudent({
      name: "Lucky",
      course: "Artificial Intelligence",
    });
  }

  // Change Name
  function changeName() {
    setName("Gunasri");
  }

  // Toggle Login
  function toggleLogin() {
    setLogin(!login);
  }

  // Increase Students
  function increaseStudents() {
    setStudents(students + 1);
  }

  // Decrease Students
  function decreaseStudents() {
    if (students > 0) {
      const updatedStudents = students - 1;
      setStudents(updatedStudents);

      if (placed > updatedStudents) {
        setPlaced(updatedStudents);
      }
    }
  }

  // Increase Companies
  function increaseCompanies() {
    setCompanies(companies + 1);
  }

  // Decrease Companies
  function decreaseCompanies() {
    if (companies > 0) {
      setCompanies(companies - 1);
    }
  }

  // Increase Placed Students
  function increasePlaced() {
    if (placed < students) {
      setPlaced(placed + 1);
    }
  }

  // Decrease Placed Students
  function decreasePlaced() {
    if (placed > 0) {
      setPlaced(placed - 1);
    }
  }

  return (
    <div className="dashboard">

      <h1>Welcome Back, {name}</h1>

      <button onClick={changeName}>Change Name</button>

      <button onClick={toggleLogin}>
        {login ? "Logout" : "Login"}
      </button>

      <h3>
        Status :
        {login ? " 🟢 Logged In" : " 🔴 Logged Out"}
      </h3>

      <div className="Cards">

        {/* Students */}

        <div className="Card">
          <h2>{students}</h2>
          <p>Total Students</p>

          <div className="btn-group">
            <button onClick={increaseStudents}>+</button>
            <button onClick={decreaseStudents}>-</button>
          </div>
        </div>

        {/* Companies */}

        <div className="Card">
          <h2>{companies}</h2>
          <p>Total Companies</p>

          <div className="btn-group">
            <button onClick={increaseCompanies}>+</button>
            <button onClick={decreaseCompanies}>-</button>
          </div>
        </div>

        {/* Placed */}

        <div className="Card">
          <h2>{placed}</h2>
          <p>Placed Students</p>

          <div className="btn-group">
            <button onClick={increasePlaced}>+</button>
            <button onClick={decreasePlaced}>-</button>
          </div>
        </div>

        {/* Pending */}

        <div className="Card">
          <h2>{students - placed}</h2>
          <p>Pending Placements</p>
        </div>

      </div>

      {/* Student List */}

      <div className="student-list">

        <h2>Student List</h2>

        <button onClick={addStudent}>
          Show Students
        </button>

        <ul>
          {studentsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      {/* Object */}

      <div className="student-details">

        <h2>Student Details</h2>

        <p><strong>Name :</strong> {student.name}</p>

        <p><strong>Course :</strong> {student.course}</p>

        <button onClick={changeStudent}>
          Change Student
        </button>

      </div>

    </div>
  );
}

export default Dashboard;