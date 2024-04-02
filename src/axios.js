import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3030/', // Replace with your API base URL
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
