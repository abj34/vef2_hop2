
import Layout from "../components/Layout";
import React, { useState } from "react";
import Router from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login functionality here
    // You can use fetch or any other library to send the login data to the server

    // For example, using fetch:
    fetch("https://vef2-hop1.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }), // Send the login data as JSON
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful login
          console.log("Login successful!");
        } else {
          // Handle login error
          console.error("Login failed:", response.status, response.statusText);
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.error("Login failed:", error);
      });

    // Redirect to home page after login
    Router.push("/");
  };

  return (
    <Layout title="Login">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <a href="/register">
          <a>Register</a>
        </a>
      </p>
   </Layout>
  );
};

export default Login;
