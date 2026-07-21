import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Function to check login status
  function loginStatus() {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
      setIsLoggedIn(true);
      navigate("/Dashboard");
    } else {
      setIsLoggedIn(false);
    }
  }

  // Check login status when component loads
useEffect(() => {
  const status = loginStatus();

  if (!status) {
    navigate("/login");
  }
}, []);

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        setLoading(false);
        return;
      }

      if (!passwordPattern.test(password)) {
        alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
        );
        setLoading(false);
        return;
      }

      if (email !== "admin@gmail.com" || password !== "Admin@123") {
        alert("Invalid Email or Password");
        setLoading(false);
        return;
      }

      alert("Login Successful!");

      localStorage.setItem("isLoggedIn", "true");
      setLoading(false);

      loginStatus();
    }, 2000);
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");

    navigate("/");
  }

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <>
          <h1>Placement Management Login</h1>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="register-text">
            Don't have an account?
            <Link to="/Register"> Register</Link>
          </p>
        </>
      ) : (
        <>
          <h2>Welcome Back!</h2>

          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default Login;
