import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://your-pet-backend.onrender.com/',
});

function setToken(token) {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
}

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      try {
        getCurrent();
        return axios(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export async function register(data) {
  const { data: result } = await instance.post('/users/register', data);
  setToken(result.token);
  return result;
}

export async function login(data) {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.accessToken);
  localStorage.setItem('refreshToken', result.refreshToken);
  return result;
}

export async function logout() {
  const data = await instance.post('/users/logout');
  setToken();
  return data;
}

export async function getCurrent() {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    const { data } = await instance.post('/users/current', {
      refreshToken,
    });
    setToken(data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
}

export async function addToFavorites(id) {
  const data = await instance.post(`/users/favorites/${id}`);
  return data;
}

export async function removeFromFavorites(id) {
  const data = await instance.delete(`/users/favorites/${id}`);
  return data;
}

export async function getFavoritesList() {
  const data = await instance.delete(`/users/favorites`);
  return data;
}

export async function getUserInfo() {
  const data = await instance.get(`/users/me`);
  return data;
}

export async function updateUserInfo(data) {
  const { data: result } = await instance.patch(`/users/me`, data);
  return result;
}

export default instance;
