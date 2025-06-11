import axios from "axios";

const API_BASE_URL = "http://172.31.60.91:8000";

export async function fetchMyBuddies() {
  const response = await axios.get(`${API_BASE_URL}/buddy/`);

  const modifiedResult = response.data.results.map((post) => ({
    ...post,
    isCommunity: true,
  }));
  return modifiedResult;
}

export async function fetchRecommendedBuddies() {
  const response = await axios.get(`${API_BASE_URL}/buddy/recommend/`);

  const modifiedResult = response.data.results.map((post) => ({
    ...post,
    isCommunity: true,
  }));
  return modifiedResult;
}

export async function fetchSentRequests() {
  const response = await axios.get(`${API_BASE_URL}/buddy/request/`);

  const modifiedResult = response.data.results.map((post) => ({
    ...post,
    isCommunity: true,
  }));
  return modifiedResult;
}

export async function fetchPendingRequests() {
  const response = await axios.get(`${API_BASE_URL}/buddy/sent/`);

  const modifiedResult = response.data.results.map((post) => ({
    ...post,
    isCommunity: true,
  }));
  return modifiedResult;
}
