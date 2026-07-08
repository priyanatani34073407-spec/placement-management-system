import { useState } from "react";

function Register() {
  // State variables for form inputs
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [error, setError] = useState(""); // State variable for error messages      
  const validationErrors = {};

  // Handler for the username input
  function handleChange(event) {
    setStudentName(event.target.value);
  }

  // Handler for form submission
  function registration(event) {
    event.preventDefault(); // Prevents the browser from reloading the page
    // alert("Registration Successful");
    //validation
    if(studentName.trim() === "" ){
        alert("Please enter a valid username.");
        return;

    }
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number`
    if(!passwordPattern.test(password) ){
        validationErrors.password = "Password must be at least 8 characters long and contain at least one letter and one number.";
        return;
    }
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpattern.test(email) ){
        validationErrors.email = "Please enter a valid email.";
        return;
        return;
    }
    if(phone.length  !== 10 ){
        validationErrors.contact = "Please enter a valid contact number.";
        return;
    }
    if(cgpa < 0 || cgpa > 10 ){
        validationErrors.cgpa = "Please enter a valid CGPA.";
        return;
    }

    // You can access all form values here for API calls:
    console.log({ studentName, password, email, contact, cgpa });
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Register page</h1>
      
      {/* Using a <form> tag with onSubmit is standard practice. 
        It allows users to submit by pressing 'Enter' on any input.
      */}
      <form onSubmit={registration}>
        <div>
          <input 
            type="text" 
            placeholder="Enter Username"
            value={studentName}
            onChange={handleChange} 
          />
        </div>
        <br />
        
        <div>
          <input 
            type="password" 
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <br />
        
        <div>
          <input 
            type="email" 
            placeholder="Enter the Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <br />
        
        <div>
          <input 
            type="text" 
            placeholder="Enter the contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)} 
          />
        </div>
        <br />
        
        <div>
          <input 
            type="text" 
            placeholder="Enter the CGPA"
            value={cgpa}
            onChange={(e) => setCGPA(e.target.value)} 
          />
        </div>
        <br />
        
        <button type="submit">Register</button>
      </form>
      
      <hr style={{ margin: "30px 0" }} />
      
      <h3>Live Preview:</h3>
      <p><strong>Name:</strong> {studentName}</p>
      <p><strong>Password:</strong> {password}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Contact:</strong> {contact}</p>
      <p><strong>CGPA:</strong> {cgpa}</p>
    </div>
  );
}

export default Register;