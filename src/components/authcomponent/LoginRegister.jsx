import React, { useState } from 'react';
import './loginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { login, register } from '../../services/authService'; // Ensure this path is correct

function LoginRegister({ onLogin }) { // Accept onLogin as a prop
    const [action, setAction] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        try {
            const response = await login(email, password);
            localStorage.setItem('authToken', response.token); // Save token to localStorage
            onLogin(); // Notify parent component about the successful login
        } catch (error) {
            setErrorMessage(error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await register(email, password);
            setAction(''); // Switch to login view after successful registration
        } catch (error) {
            setErrorMessage(error);
        }
    };

    return (
        <div className="login-register-container">
        <div className={`wrapper ${action}`}>
            <div className='form-box login'>
                <form className='form' id='login-form' onSubmit={handleLogin}>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type='text' name='email' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input type='password' name='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label htmlFor="">
                            <input type='checkbox' /> Remember Me
                        </label>
                        <a href='#'>Forget password</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href='#' onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className='form-box register'>
                <form className='form' id='register-form' onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <div className="input-box">
                        <input type='text' name='email' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input type='email' name='email' placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>

                    <div className="input-box">
                        <input type='password' name='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label htmlFor="">
                            <input type='checkbox' />
                            I agree to the terms & conditions
                        </label>
                        <a href='#'>Forget password</a>
                    </div>

                    <button type='submit'>Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default LoginRegister;
