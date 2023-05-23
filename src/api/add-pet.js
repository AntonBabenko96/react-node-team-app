import instance from './auth-api';

export async function addMyNewPet(data) {
  const response = await instance.post('/pets', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response;
}

export async function addPetNotice(data) {
  const response = await instance.post('/notices', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response;
}
