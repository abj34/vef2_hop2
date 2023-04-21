
import Layout from "../components/Layout";
import React, { useState, useContext } from "react";
import Router from "next/router";
import { AuthContext } from "../components/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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
      if (response.ok) {
        console.log("Login successful!");
        const data = await response.json(); // Parse response body to JSON
        const token = data.token;
        localStorage.setItem("token", token);
        // Set user in AuthContext
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        // Fetch API request with the JWT token in the headers
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, { headers })
          .then((response) => {
            // Handle response
            if (response.ok) {
              console.log(username)
              localStorage.setItem("username", username);
              localStorage.setItem("admin", true.toString());
              setUser({ username, is_admin: true });
            } else {
              localStorage.setItem("username", username);
              localStorage.setItem("admin", false.toString());
              setUser({ username, is_admin: false });
            }
            Router.push("/");
          })
          .catch((error) => {
            console.error("Login failed:", error);
          });
      } else {
        console.error("Login failed:", response.status, response.statusText);
        const errorData = await response.json(); // Parse error response body to JSON
        setError(errorData.errors[0].msg);
      }
    })
    .catch((error) => {
      console.error("Login failed:", error);
      setError("An error occurred while logging in. Please try again later.");
    });
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
                 
                  <p key={error}>{error}</p>
            </div>
        </Layout>
    );
};

export default Login;
