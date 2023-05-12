import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const sponsorsInstance = axios.create({
  baseURL: baseURL ? baseURL : 'https://your-pet-backend.onrender.com/',
});

export const getSponsors = async (page = 1, limit = 10) => {
  try {
    const { data } = await sponsorsInstance.get(
      `/sponsors?page=${page}&limit=${limit}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
