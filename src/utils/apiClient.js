// import axios from "axios";
// import { tokenManager } from "./tokenManager";

// const apiClient = axios.create({
//   baseURL: "http://172.31.60.91:8000",
// });

// apiClient.interceptors.request.use((config) => {
//   const token = tokenManager.getAccessToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default apiClient;
