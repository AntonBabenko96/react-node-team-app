import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const newsInstance = axios.create({
  baseURL: baseURL ? baseURL : 'https://your-pet-backend.onrender.com/',
});

export const getNews = async (page = 1, limit = 10, title = '') => {
  try {
    const { data } = await newsInstance.get(
      `/news?page=${page}&limit=${limit}&title=${title}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
