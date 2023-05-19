import React, { useState } from "react";
import "./css/SignupScreen.css";
import { Link, useNavigate } from "react-router-dom";

function SignupScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any required fields are empty
    if (!name || !email || !password) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Perform signup logic here with the name, email, and password values
    // For example, you can make an API request to your backend

    // Clear the form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} required />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>
        have an account? <Link to="/login">log in</Link>
      </p>
    </div>
  );
}

export default SignupScreen;
