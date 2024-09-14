import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your Golang API base URL

// Login Service
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data; // Return the token or any data from the response
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

// Register Service
export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      email,
      password,
    });
    return response.data; // Return any data if needed
  } catch (error) {
    console.log(error);
    throw error.response?.data?.message || 'Registration failed';
  }
};
