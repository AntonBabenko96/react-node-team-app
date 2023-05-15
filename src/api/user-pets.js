import axios from 'axios';

const userPetsInstanse = axios.create({
  baseURL: 'https://your-pet-backend.onrender.com/',
});

export const getUserPets = async () => {
  try {
    const { data } = await userPetsInstanse.get('/pets');
    return data;
  } catch (error) {
    throw error;
  }
};
