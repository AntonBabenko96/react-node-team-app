import instance from './auth-api';

// для отримання оголошень по заголовку та по категоріям + фільтр
export async function getNotices({
  sex = '',
  age = '',
  category = 'sell',
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

// для отримання оголошень авторизованого кристувача створених цим же користувачем
export async function getMyNotices() {
  const { data } = await instance.get('notices/my');
  return data;
}

// для видалення оголошення авторизованого кристувача створеного цим же користувачем
export async function deleteMyNotice(id) {
  const { data } = await instance.delete(`notices/${id}`);
  return data;
}

// для отримання улюблених оголошень авторизованого кристувача
export async function getFavoritesList() {
  const data = await instance.delete(`/users/favorites`);
  return data;
}
