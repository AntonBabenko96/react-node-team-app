import instance from './auth-api ';

export async function addMyNewPet(data) {
  //   instance.defaults.headers.common.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWZiZWVmMjUyNjQwMjIyMmZiY2U5NiIsImlhdCI6MTY4NDE1NTY2MywiZXhwIjoxNjg0MjQyMDYzfQ.O7qlwUL0uJXBoHeWT2DIYniE93wUY0WFvnr2rY7Yf1E`;
  const response = await instance.post('/pets', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  console.log(data);
  return response;
}

export async function addPetNotice(data) {
  //   instance.defaults.headers.common.authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWZiZWVmMjUyNjQwMjIyMmZiY2U5NiIsImlhdCI6MTY4NDE1NTY2MywiZXhwIjoxNjg0MjQyMDYzfQ.O7qlwUL0uJXBoHeWT2DIYniE93wUY0WFvnr2rY7Yf1E`;
  const response = await instance.post('/notices', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  console.log(data);
  return response;
}
