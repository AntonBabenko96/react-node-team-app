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
    data.append('comments', values.comments);
  }
}
