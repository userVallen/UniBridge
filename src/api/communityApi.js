import axios from "axios";

const API_BASE_URL = "http://172.31.60.91:8000";

export async function fetchCommunityPosts() {
  const response = await axios.get(`${API_BASE_URL}/posts/community/`);

  const modifiedResult = response.data.results.map((post) => ({
    ...post,
    isCommunity: true,
  }));
  return modifiedResult;
}
