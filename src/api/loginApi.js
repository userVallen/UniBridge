import axios from "axios";

const API_BASE_URL = "http://172.31.60.91:8000";

export async function loginUser(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login/`, {
      email,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed." };
  }
}
