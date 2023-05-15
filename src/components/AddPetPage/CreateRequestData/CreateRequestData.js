export function createRequestData(data, state, values) {
  if (state.category === 'my pet') {
    data.append('file', values.photo);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('birth', state.dateOfBirth);
    data.append('breed', state.breed);
    data.append('comments', values.comments);

    return data;
  }

  if (state.category === 'sell') {
    data.append('file', values.photo);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('birth', state.dateOfBirth);
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
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('birth', state.dateOfBirth);
    data.append('breed', state.breed);
    data.append('title', state.title);
    data.append('category', state.category);
    data.append('sex', values.sex);
    data.append('comments', values.comments);
    data.append('location', values.location);
  }

  if (state.category === 'for-free') {
    data.append('file', values.photo);
    data.append('type', state.type);
    data.append('name', state.petName);
    data.append('birth', state.dateOfBirth);
    data.append('breed', state.breed);
    data.append('title', state.title);
    data.append('category', state.category);
    data.append('sex', values.sex);
    data.append('comments', values.comments);
    data.append('location', values.location);
  }
}
