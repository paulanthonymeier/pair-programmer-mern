import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'https://localhost:4444',
  withCredentials: true
});

export default request;