
import Layout from "../components/Layout";
import React, { useState, useContext } from "react";
import Router from "next/router";
import { AuthContext } from "../components/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // Send the login data as JSON
    })
      .then(async (response) => {
        console.log("Login successful!");
        const data = await response.json(); // Parse response body to JSON
        const token = data.token; 
        console.log(token)
        localStorage.setItem("token", token);
        setUser({ username }); // Set user in AuthContext

        const headers = {
          "Authorization": `Bearer ${token}`
        };
        
        // Fetch API request with the JWT token in the headers
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, { headers })
          .then(response => {
            // Handle response
            if (response.ok) {
              Router.push("/admin");
            } else {
              Router.push("/users");
            }
          })
          .catch(error => {
            console.error("Login failed:", error);
          });
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
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
          Register
        </a>
      </p>
   </Layout>
  );
};

export default Login;
