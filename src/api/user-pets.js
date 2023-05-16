import instance from './auth-api';

export const getUserPets = async () => {
  try {
    const { data } = await instance.get('/pets');
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserPets = async id => {
  try {
    const { data } = await instance.delete(`pets/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
