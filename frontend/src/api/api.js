import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/db-fixtures'; // Fixed variable name

export const getAllFixtures = async () => {
  const response = await axios.get(`${API_BASE_URL}`); // Corrected string interpolation
  return response.data;
};

export const getUpcomingMatches = async () => {
  const response = await axios.get(`${API_BASE_URL}/upcoming`);
  return response.data;
};

export const getCompletedMatches = async () => {
  const response = await axios.get(`${API_BASE_URL}/completed`);
  return response.data;
};

export const searchMatches = async (team) => {
  const response = await axios.get(`${API_BASE_URL}/search/${team}`);
  return response.data;
};
