import instance from './auth-api';

export async function getNoticesByCategory({ category, page, limit }) {
  const { data } = await instance.get(
    `/notices/find/byCategory?category=${category}&page=${page}&limit=${limit}`
  );
  return data;
}

export async function getNoticesByTitle(data) {
  const { data: result } = await instance.get('/notices/find/byTitle', data);
  return result;
}

export async function getNoticeById({ id }) {
  const { data } = await instance.get(`/notices/find/${id}`);
  return data;
}
