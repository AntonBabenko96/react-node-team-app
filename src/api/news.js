import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const newsInstance = axios.create({
  baseURL,
});

export const getNews = async () => {
  try {
    const { data } = await newsInstance.get('/news');
    return data;
  } catch (error) {
    throw error;
  }
};
