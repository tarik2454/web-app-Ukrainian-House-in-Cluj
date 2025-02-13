import axios, { AxiosInstance } from 'axios';

// const apiClient = axios.create({
//   baseURL: 'http://localhost:3001/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 5000,
// });

// apiClient.interceptors.response.use(
//   response => response,
//   error => {
//     console.error('API Error:', error);
//     return Promise.reject(error);
//   }
// );

export const API: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

// export default apiClient;
