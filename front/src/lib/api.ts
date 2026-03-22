import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',   // ← change si port différent
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;