import instance from './auth-api ';

// для отримання оголошень по категоріям
export async function getNoticesByCategory({category, page, limit}) {
  const {data} = await instance.get(`/notices/find/byCategory?category=${category}&page=${page}&limit=${limit}`);
  return data;
}

// для отримання оголошень по заголовку
export async function getNoticesByTitle({title, page, limit}) {
  const { data: result } = await instance.get(`/notices/find/byTitle?title=${title}&page=${page}&limit=${limit}`);
  return result;
}

// для отримання оголошень по заголовку та по категоріям + фільтр
export async function getNoticesByCategoryAndTitle({ sex, age, category, title, page, limit}) {
  const { data: result } = await instance.get(`/notices/find/byTitle?category=${category}&title=${title}&age=${age}&sex=${sex}&page=${page}&limit=${limit}`);
  return result;
}

// для отримання одного оголошення по id
export async function getNoticeById({ id }) {
  const { data } = await instance.get(`/notices/find/${id}`);
  return data;
}