import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Send registration data to the API endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Handle successful registration
        //console.log('Registration successful!');
        Router.push('/login');
      } else {
        // Handle registration error
          //console.error('Login failed:', response.status, response.statusText);
          const errorData = await response.json(); // Parse error response body to JSON
          //console.log(errorData.errors[0].msg);
          setError(errorData.errors[0].msg);
      }
    } catch (error) {
      // Handle fetch error
      //console.error('Registration failed:', error);
    }
  };

  return (
    <Layout title='Register'>
      <div className='formArea'>
        <form onSubmit={handleRegister}>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
        <p>Already have an account?{' '}
          <a href='/login'>Log in</a>
        </p>
        <p key={error}>{error}</p>
      </div>
      </Layout>
  );
};

export default Register;
