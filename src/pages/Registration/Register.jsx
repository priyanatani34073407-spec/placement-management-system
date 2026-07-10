import { useState } from "react";
import "./Register.css";

function Register({ students, setStudents }) {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [password, setPassword] = useState("");

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  function handleRegister(e) {
    e.preventDefault();

    if (
      studentName.trim() === "" ||
      email.trim() === "" ||
      mobile.trim() === "" ||
      branch.trim() === "" ||
      cgpa.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Enter a valid Email.");
      return;
    }

    if (mobile.length !== 10) {
      alert("Mobile number must contain 10 digits.");
      return;
    }

    if (!passwordPattern.test(password)) {
      alert(
        "Password must contain uppercase, lowercase, number and special character."
      );
      return;
    }

    const newStudent = {
      studentName,
      email,
      mobile,
      branch,
      cgpa,
      password,
    };

    setStudents([...students, newStudent]);

    console.clear();
    console.log("Registered Students");
    console.table([...students, newStudent]);

    alert("Registration Successful ✅");

    setStudentName("");
    setEmail("");
    setMobile("");
    setBranch("");
    setCgpa("");
    setPassword("");
  }

  return (
    <div className="register-container">

      <div className="register-box">

        <h1>Student Registration</h1>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) =>
              setStudentName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="College Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e) =>
              setBranch(e.target.value)
            }
          />

          <input
            type="number"
            placeholder="CGPA"
            value={cgpa}
            onChange={(e) =>
              setCgpa(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Register Student
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;