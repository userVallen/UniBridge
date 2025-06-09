import axios from "axios";

const API_BASE_URL = "http://172.31.61.133:8000";

export async function sendEmailCode(email) {
  try {
    console.log("email: " + email);
    const response = await axios.post(`${API_BASE_URL}/auth/email-verify/`, {
      email,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        status: error.response.status,
        message: error.response.data?.message || "Verification failed",
      };
    } else throw error.response?.data || { message: "Failed to send email" };
  }
}

export async function verifyEmailCode(email, code) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/email-verify/confirm/`,
      { email, code }
    );

    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, message: "Unexpected status code." };
    }
  } catch (error) {
    throw error.response?.data || { message: "Verification failed." };
  }
}

export async function signUpUser(formData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup/userinfo/`, {
      ...formData,
      student_id: formData.studentId,
      student_type: formData.studentType,
      matchingType: formData.matchingtype,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Sign up failed." };
  }
}
