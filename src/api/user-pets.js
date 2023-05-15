import axios from 'axios';

const userPetsInstanse = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export const getUserPets = async () => {
  try {
    const { data } = await userPetsInstanse.get('/pets');
    return data;
  } catch (error) {
    throw error;
  }
};
