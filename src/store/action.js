import tp from './types';

export const deleteContact = value => ({
  type: tp.DELETE,
  payload: value,
});

export const filterContacts = value => ({
  type: tp.FILTER,
  payload: value,
});

export const addContact = value => ({
  type: tp.ADD,
  payload: value,
});
