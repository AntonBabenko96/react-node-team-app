import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const sponsorsInstance = axios.create({
  baseURL,
});

export const getSponsors = async () => {
  try {
    const { data } = await sponsorsInstance.get('/sponsors');
    return data;
  } catch (error) {
    throw error;
  }
};
