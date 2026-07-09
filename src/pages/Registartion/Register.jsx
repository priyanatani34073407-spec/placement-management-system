import { useState } from "react";
import "./Register.css";

function Register() {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [skills, setSkills] = useState("");
  const [terms, setTerms] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (
      studentName === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Please fill all required fields");
      return;
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Enter valid email address");
      return;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      setError("Mobile number must contain 10 digits");
      return;
    }

    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must have 8 characters with uppercase, lowercase, number and special character"
      );
      return;
    }

    if(password !== confirmPassword){
      setError("Password does not match");
      return;
    }

    if(!terms){
      setError("Please accept Terms & Conditions");
      return;
    }
    setSuccess("Registration Successful");

    console.log({
      studentName,
      email,
      mobile,
      gender,
      college,
      branch,
      graduationYear,
      skills
    });

    handleReset();
  }

  function handleReset(){
    setStudentName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
    setGender("");
    setCollege("");
    setBranch("");
    setGraduationYear("");
    setSkills("");
    setTerms(false);
  }
  return (
    <div className="register-container">
      <div className="register-box">
        <h1>
          Student Registration
        </h1>
        {
          error &&
          <p className="error">
            {error}
          </p>
        }

        {
          success &&
          <p className="success">
            {success}
          </p>
        }

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e)=>setStudentName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <select
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
          >
            <option value="">
              Select Gender
            </option>
            <option>
              Male
            </option>
            <option>
              Female
            </option>
          </select>
          <input
            type="text"
            placeholder="College Name"
            value={college}
            onChange={(e)=>setCollege(e.target.value)}
          />
          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e)=>setBranch(e.target.value)}
          />
          <input
            type="number"
            placeholder="Graduation Year"
            value={graduationYear}
            onChange={(e)=>setGraduationYear(e.target.value)}
          />
          <input
            type="text"
            placeholder="Skills"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
          />
          <input type="file" />
          <label>
            <input
              type="checkbox"
              checked={terms}
              onChange={(e)=>setTerms(e.target.checked)}
            />
            Accept Terms & Conditions
          </label>
          <div className="buttons">
            <button type="submit">
              Register
            </button>
            <button
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;