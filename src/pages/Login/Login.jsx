import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  function handleLogin() {

    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please fill all the fields.");
      setSuccess(false);
      return;
    }

    setLoading(true);

    setTimeout(() => {

      if (
        email === "admin@gmail.com" &&
        password === "Admin@123"
      ) {
        setSuccess(true);
        setMessage("Login Successful ✅");
      }

      else {
        setSuccess(false);
        setMessage("Invalid Email or Password ❌");
      }

      setLoading(false);

    },2000);

  }

  function clearForm(){

    setEmail("");
    setPassword("");
    setMessage("");
    setShowPassword(false);

  }

  return(

    <div className="login-container">

      <div className="login-box">

        <h1>Placement Management System</h1>

        <h2>Login</h2>

        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />

        <div className="password-box">

          <input

            type={showPassword ? "text" : "password"}

            placeholder="Enter Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

          />

          <button

            className="toggle-btn"

            onClick={()=>setShowPassword(!showPassword)}

          >

            {showPassword ? "Hide" : "Show"}

          </button>

        </div>

        <div className="login-buttons">

          <button

            onClick={handleLogin}

            disabled={loading}

          >

            {loading ? "Logging in..." : "Login"}

          </button>

          <button

            className="clear-btn"

            onClick={clearForm}

          >

            Clear

          </button>

        </div>

        <p className="forgot">

          Forgot Password?

        </p>

        <p className="register">

          New User? Register

        </p>

        {message && (

          <p

            className={success ? "success" : "error"}

          >

            {message}

          </p>

        )}

      </div>

    </div>

  );

}

export default Login;