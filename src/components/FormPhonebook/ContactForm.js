import React from 'react';
import './ContactForm.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../api/api';
import {useSelector} from 'react-redux';
export default function ContactForm() {

  const dispatch = useDispatch();
  const {contacts} = useSelector(state => state.contacts);
  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  }; 
  const handelSubmitForm = e => {
    e.preventDefault();
    if (checkName(e.target.name.value)) {
      alert(`is already in contacts`);
    } else{
    dispatch(addContact(e.target.name.value, e.target.phone.value));
    }
    e.target.reset();
  };
  return (
    <form onSubmit={handelSubmitForm} className="formData">
      <label className="formDataLabel">
        Name
        <input
          className="formDataInput"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="formDataLabel">
        Number
        <input
          className="formDataInput"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className="formDataBtn">
        Add contact
      </button>
    </form>
  );
}

