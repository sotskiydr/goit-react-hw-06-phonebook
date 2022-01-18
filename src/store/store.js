import { createStore } from 'redux';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Vova Putin', number: '459-12-56' },
      { id: 'id-2', name: 'Vitya Poroshenko', number: '443-89-12' },
      { id: 'id-3', name: 'Vova Lenin', number: '645-17-79' },
      { id: 'id-4', name: 'Joseph Stalin', number: '227-91-26' },
    ],
    filter: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      const { name, number } = action.payload;
      const newItem = {
        id: nanoid(),
        name: name,
        number: number,
      };
      let isUnique = state.contacts.items.some(
        el => el.name === action.payload.items,
      );
      if (!isUnique) {
        return {
          ...state,
          contacts: {
            ...state.contacts,
            items: [...state.contacts.items, newItem],
          },
        };
      } else {
        alert(`${name} is already in contacts`);
      }
      return;
    case 'delete':
      // return state.contacts.items.filter(el => el.id !== action.payload);
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [
            ...state.contacts.items.filter(el => el.id !== action.payload),
          ],
        },
      };
    case 'filter':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
