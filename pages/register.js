import React, { useState } from "react";
import Layout from "../components/Layout";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // Send registration data to the API endpoint
      const response = await fetch("https://vef2-hop1.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Handle successful registration
        console.log("Registration successful!");
      } else {
        // Handle registration error
        console.error("Registration failed:", response.status, await response.json());
      }
    } catch (error) {
      // Handle fetch error
      console.error("Registration failed:", error);
    }
  };

  return (
    <Layout title="Register">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      </Layout>
  );
};

export default Register;
