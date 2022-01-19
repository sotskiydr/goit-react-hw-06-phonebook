import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactsList';
// import useLocalStorage from './components/hooks/uselocalstorage';
import { connect } from 'react-redux';
import * as actions from './store/action';
import './App.css';

function App({ filter, addContact, filterContacts }) {
  const changeFilter = e => {
    filterContacts(e.currentTarget.value);
  };

  return (
    <main className="main">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList />
    </main>
  );
}

const mapStateToProps = state => {
  return state.app;
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, number) => dispatch(actions.addContact(name, number)),
    filterContacts: value => dispatch(actions.filterContacts(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
