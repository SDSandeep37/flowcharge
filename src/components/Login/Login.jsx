import { useState } from "react";
import "./login.css";
import UserMessage from "../UserMessage/UserMessage";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");

  const timer = () => {
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 2000);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    try {
      if (!email && !password) {
        setMessageType("error");
        setMessage("Please fill the form");
        return;
      }
      if (!email) {
        setMessageType("error");
        setMessage("Please enter your email");
        return;
      }
      if (!password) {
        setMessageType("error");
        setMessage("Password is required");
        return;
      }
      handleApiCall();
    } catch (error) {
      console.log(error);
    } finally {
      timer();
    }
  };
  const handleApiCall = async () => {
    try {
      setMessageType("");
      setMessage("Please wait...");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          credentials: "include",
        },
      );
      const result = await response.json();
      if (!result.success) {
        setMessageType("error");
        setMessage(result.message);
      }
      setMessageType("success");
      setMessage(result.message);
      // navigate("/dashboard");
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
      setMessageType("error");
      setMessage("Some went wrong. Please try again!");
    }
  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="logo">
          <img src="/logo.png" />
          <p>Continue your beautiful journey with, Just Login</p>
        </div>
        <form className="loginForm">
          <div className="loginContent">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email id"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div className="loginContent">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <UserMessage type={messageType} message={message} />
          <button className="loginButton" onClick={handleLogin}>
            Login
          </button>
          <div className="loginContent">
            <span>
              Not yet register! Click Here <Link to="/register"> Register</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
