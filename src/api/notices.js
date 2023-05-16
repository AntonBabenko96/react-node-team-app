import instance from './auth-api';

// для отримання оголошень по заголовку та по категоріям + фільтр
export async function getNotices({
  sex = '',
  age = '',
  category = '',
  title = '',
  page = '',
  limit = '',
}) {
  const { data: result } = await instance.get(
    `/notices?category=${category}&title=${title}&age=${age}&sex=${sex}&page=${page}&limit=${limit}`
  );
  return result;
}

// для отримання одного оголошення по id
export async function getNoticeById(id) {
  const { data } = await instance.get(`/notices/${id}`);
  return data;
}
