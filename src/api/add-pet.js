import instance from './auth-api ';

export async function addNewPet(data) {
  instance.defaults.headers.common.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWZiZWVmMjUyNjQwMjIyMmZiY2U5NiIsImlhdCI6MTY4NDE0Mjc2NCwiZXhwIjoxNjg0MTQzOTY0fQ.N2_RNPiZcweCLGYAUa3-FGJ0eyS-JNh7qn88XRm5g-w`;
  const response = await instance.post('/pets', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  console.log(data);
  return response;
}
