import { useState } from "react";
import "./Register.css";

function Register() {
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [error, setError] = useState("");

  function registration(event) {
    event.preventDefault();

    setError("");

    // Username Validation
    if (studentName.trim() === "") {
      setError("Student name is required.");
      return;
    }

    // Password Validation
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must contain at least 8 characters, one letter and one number."
      );
      return;
    }

    // Email Validation
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailPattern.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    // Contact Validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(contact)) {
      setError("Contact number must contain exactly 10 digits.");
      return;
    }

    // CGPA Validation
    const cgpaValue = Number(cgpa);

    if (isNaN(cgpaValue) || cgpaValue < 0 || cgpaValue > 10) {
      setError("CGPA should be between 0 and 10.");
      return;
    }

    alert("Registration Successful!");

    console.log({
      studentName,
      password,
      email,
      contact,
      cgpa,
    });

    // Clear Form
    setStudentName("");
    setPassword("");
    setEmail("");
    setContact("");
    setCGPA("");
  }

  return (
    <div className="register-container">
      <div className="register-box">

        <h1>Student Registration</h1>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={registration}>

          <input
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter CGPA"
            value={cgpa}
            onChange={(e) => setCGPA(e.target.value)}
            step="0.01"
            min="0"
            max="10"
          />

          <button type="submit">
            Register
          </button>

        </form>

        <div className="preview">

          <h3>Live Preview</h3>

          <p><strong>Name:</strong> {studentName}</p>

          <p><strong>Password:</strong> {password}</p>

          <p><strong>Email:</strong> {email}</p>

          <p><strong>Contact:</strong> {contact}</p>

          <p><strong>CGPA:</strong> {cgpa}</p>

        </div>

      </div>
    </div>
  );
}

export default Register;