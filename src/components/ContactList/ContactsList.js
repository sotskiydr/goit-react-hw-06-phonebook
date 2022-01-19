import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/action';

const ContactsList = ({ items, deleteContact }) => {
  console.log(items);
  return (
    <ul className={styles.list}>
      {items.map(el => {
        return (
          <li className={styles.item} key={el.id}>
            <span className={styles.span}>
              {el.name}: {el.number}
            </span>
            <button
              className={styles.btn}
              type="button"
              id={el.id}
              onClick={() => {
                deleteContact(el.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ app }) => {
  const toLowerCaseFilter = app.filter.toLowerCase();
  const items = app.contacts.filter(el =>
    el.name.toLowerCase().includes(toLowerCaseFilter),
  );
  return { items };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
