import React, { useState } from "react";
import UserMessage from "../UserMessage/UserMessage";

const RegistrationForm = ({ userRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(userRole);
  const [messageType, setMessageType] = useState("");
  const [message, setMessage] = useState("");

  const timer = () => {
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    try {
      if (!email && !password && !name && !role) {
        setMessageType("error");
        setMessage("Please fill the form");
        return;
      }
      if (!name) {
        setMessageType("error");
        setMessage("Please enter your full name");
        return;
      }
      if (!email) {
        setMessageType("error");
        setMessage("Please enter your email");
        return;
      }
      if (role !== "consumer" && role !== "owner") {
        setMessageType("error");
        setMessage("Please select a valid role");
        return;
      }
      if (!password) {
        setMessageType("error");
        setMessage("Password is required");
        return;
      }
      if (password !== confirmPassword) {
        setMessageType("error");
        setMessage("Password and Confirm Password should be the same");
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
        `${import.meta.env.VITE_API_URL}/users/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
            role: role,
          }),
          credentials: "include",
        },
      );
      const result = await response.json();
      if (!result.success) {
        setMessageType("error");
        setMessage(result.message);
        return;
      }
      setMessageType("success");
      setMessage(result.message);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setRole("consumer");
    } catch (error) {
      console.error("Register failed:", error);
      setMessageType("error");
      setMessage("Some went wrong. Please try again!");
    }
  };
  return (
    <form className="registerForm">
      <div className="registerContent">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
          id="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </div>
      <div className="registerContent">
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
      <div className="registerContent">
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
      <div className="registerContent">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={(event) => setConfirmPassword(event.target.value)}
          value={confirmPassword}
        />
      </div>
      <div className="registerContent">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          onChange={(event) => setRole(event.target.value)}
          value={role}
        >
          <option value="consumer">Consumer</option>
          <option value="owner">Owner</option>
        </select>
      </div>
      <UserMessage type={messageType} message={message} />
      <button className="registerButton" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
