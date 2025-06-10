import axios from "axios";

const API_BASE_URL = "http://172.31.60.91:8000";

export async function fetchNoticePosts() {
  const response = await axios.get(`${API_BASE_URL}/posts/notice/`);
  return response.data.results;
}
