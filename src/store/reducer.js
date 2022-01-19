import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';
import tp from './types';

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case tp.ADD:
      const { name, number } = payload;
      const newItem = {
        id: nanoid(),
        name: name,
        number: number,
      };
      let isUnique = state.some(el => el.name === payload.items);
      if (!isUnique) {
        return [...state, newItem];
      } else {
        alert(`${name} is already in contacts`);
      }
      return;
    case tp.DELETE:
      return [...state.filter(el => el.id !== payload)];
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case tp.FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
