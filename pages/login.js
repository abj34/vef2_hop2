
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

    fetch("https://vef2-hop1.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // Send the login data as JSON
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful login
          console.log("Login successful!");
          setUser({username})
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
            <div className="formArea">
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
                <p>Don't have an account?{' '}
                    <a href="/register">Register</a>
                </p>
            </div>
        </Layout>
    );
};

export default Login;
