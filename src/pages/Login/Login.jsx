import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({ students }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  function handleLogin(){

      if(email==="" || password===""){
          setMessage("Please fill all fields.");
          return;
      }

      setLoading(true);

      setTimeout(()=>{

          const student = students.find(
              (student)=>
              student.email===email &&
              student.password===password
          );

          if(student){
              setMessage("Login Successful");
          }
          else{
              setMessage("Invalid Email or Password");
          }

          setLoading(false);

      },2000);

  }

  return(

      <div className="login-container">

          <div className="login-card">

              <h1>Placement Management Login</h1>

              <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
              />

              <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
              />

              <button
                  onClick={handleLogin}
                  disabled={loading}
              >
                  {loading ? "Logging..." : "Login"}
              </button>

              {message &&

                  <p className="message">
                      {message}
                  </p>

              }

              <p>

                  Don't have an account?

                  <Link to="/register">
                      Register
                  </Link>

              </p>

          </div>

      </div>

  );

}

export default Login;