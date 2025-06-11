import axios from "axios";

const API_BASE_URL = "http://172.31.60.91:8000";

export async function createNoticePost(postData) {
  try {
    console.log(postData);
    const response = await axios.post(`${API_BASE_URL}/posts/notice/create/`, {
      ...postData,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        status: error.response.status,
        message: error.response.data?.message || "Post creation failed",
      };
    } else {
      console.error("Other error:", error.message);
      return {
        success: false,
        status: 0,
        message: error.message || "Unknown error occurred",
      };
    }
  }
}

export async function createCommunityPost(postData) {
  try {
    console.log(postData);
    const response = await axios.post(
      `${API_BASE_URL}/posts/community/create/`,
      { ...postData }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        status: error.response.status,
        message: error.response.data?.message || "Post creation failed",
      };
    } else {
      console.error("Other error:", error.message);
      return {
        success: false,
        status: 0,
        message: error.message || "Unknown error occurred",
      };
    }
  }
}
