import { createAction } from '@reduxjs/toolkit';

export const deleteContact = createAction('delete');
export const filterContacts = createAction('filter');
export const addContact = createAction('add');
