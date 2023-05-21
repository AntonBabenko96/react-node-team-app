import instance from './auth-api';

// для отримання оголошень по заголовку та по категоріям + фільтр
export async function getNotices({
  category = '',
  title = '',
  age = '',
  sex = '',
  favorite = '',
  page = 1,
  limit = 12,
  onlyMine = '',
}) {
  const { data: result } = await instance.get(
    `/notices?category=${category}&title=${title}&age=${age}&sex=${sex}&page=${page}&limit=${limit}&favorite=${favorite}&only-mine=${onlyMine}`
  );
  return result;
}

// для отримання одного оголошення по id
export async function getNoticeById(id) {
  try {
    const { data } = await instance.get(`/notices/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// для видалення оголошення авторизованого кристувача створеного цим же користувачем
export async function deleteMyNotice(id) {
  const { data } = await instance.delete(`notices/${id}`);
  return data;
}
