import React, { useState } from 'react';
import { login, register } from '../../services/authService'; // Import the services

function LoginRegister({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and register
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        // Register call
        await register(email, password);
        alert('Registration successful! Please log in.');
        setIsRegister(false); // Switch back to login mode after registration
      } else {
        // Login call
        const response = await login(email, password);
        localStorage.setItem('authToken', response.token); // Store token in localStorage
        onLogin(); // Notify the App component that the user is logged in
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
      </button>
    </div>
  );
}

export default LoginRegister;
