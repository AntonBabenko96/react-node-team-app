export function createRequestData(state, values) {
  // console.log(state);
  const time = state.dateOfBirth;
  const birthDay = time.slice(0, 2);
  const birthMonth = time.slice(3, 5);
  const birthYear = time.slice(-4);
  const dateOfBirth = new Date(birthYear, birthMonth - 1, birthDay);
  const data = new FormData();

  if (state.category === 'my pet') {
    data.append('birth', dateOfBirth);
    data.append('file', values.photo);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('breed', state.breed);
    data.append('comments', values.comments);

    return data;
  }

  if (state.category === 'sell') {
    data.append('file', values.photo);
    data.append('birth', dateOfBirth);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('breed', state.breed);
    data.append('title', state.title);
    data.append('category', state.category);
    data.append('sex', values.sex);
    data.append('comments', values.comments);
    data.append('location', values.location);
    data.append('price', values.price);
  }

  if (state.category === 'lost-found') {
    data.append('file', values.photo);
    data.append('birth', dateOfBirth);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('breed', state.breed);
    data.append('title', state.title);
    data.append('category', state.category);
    data.append('sex', values.sex);
    data.append('comments', values.comments);
    data.append('location', values.location);
  }

  if (state.category === 'for-free') {
    data.append('file', values.photo);
    data.append('birth', dateOfBirth);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('breed', state.breed);
    data.append('title', state.title);
    data.append('category', state.category);
    data.append('sex', values.sex);
    data.append('comments', values.comments);
    data.append('location', values.location);
  }

  return data;
}
