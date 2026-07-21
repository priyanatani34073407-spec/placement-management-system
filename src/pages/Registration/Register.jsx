import { useState } from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCGPA] = useState("");

  const [loading, setLoading] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  async function registerStudent(e) {
    e.preventDefault();

    if (studentName.trim() === "") {
      alert("Name is required");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Enter a valid email");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Enter a valid 10-digit phone number");
      return;
    }

    if (branch.trim() === "") {
      alert("Branch is required");
      return;
    }

    if (cgpa === "" || Number(cgpa) < 0 || Number(cgpa) > 10) {
      alert("CGPA must be between 0 and 10");
      return;
    }

    if (!passwordPattern.test(password)) {
      alert(
        "Password must contain at least 8 characters with uppercase, lowercase, number and special character."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentName,
          email,
          phone,
          branch,
          cgpa,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration Failed");
        return;
      }

      alert("Student Registered Successfully!");

      setStudentName("");
      setPassword("");
      setEmail("");
      setPhone("");
      setBranch("");
      setCGPA("");

      navigate("/students");
    } catch (error) {
  console.error("Full Error:", error);
  console.error("Message:", error.message);
  alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="register-container">
      <h1>Student Registration</h1>

      <form onSubmit={registerStudent}>
        <input
          type="text"
          placeholder="Enter Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          disabled={loading}
        />

        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <br />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
        />

        <br />

        <input
          type="text"
          placeholder="Enter Branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          disabled={loading}
        />

        <br />

        <input
          type="number"
          placeholder="Enter CGPA"
          value={cgpa}
          onChange={(e) => setCGPA(e.target.value)}
          disabled={loading}
        />

        <br />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        <br />
        <br />

        <h4>Already Have An Account?</h4>

        <button
          type="button"
          onClick={() => navigate("/login")}
          disabled={loading}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Register;
