import React, { useState } from "react";
import Layout from "../components/Layout";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // Send registration data to the API endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, {
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
      <div className="formArea">
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
          <button type="submit">Login</button>
        </form>
        <p>Already have an account?{' '}
          <a href="/login">Log in</a>
        </p>
      </div>
      </Layout>
  );
};

export default Register;
