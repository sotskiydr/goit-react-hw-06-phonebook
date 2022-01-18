export const deleteContact = value => ({
  type: 'delete',
  payload: value,
});

export const filterContacts = value => ({
  type: 'filter',
  payload: value,
});

export const addContact = value => ({
  type: 'add',
  payload: value,
});
