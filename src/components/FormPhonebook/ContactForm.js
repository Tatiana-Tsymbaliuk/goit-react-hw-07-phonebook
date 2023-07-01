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
    
    const name = e.currentTarget.name.value;
    const phone = e.currentTarget.phone.value;
    if (checkName(name)) {
      alert(`${name} is already in contacts`);
    } else{
      dispatch(addContact({name, phone})); 
      e.currentTarget.reset();
    }
    
  };
  return (
    <form onSubmit={handelSubmitForm} className="formData">
      <label className="formDataLabel">
        Name
        <input
          className="formDataInput"
          type="text"
          name="name"
          pattern="^[A-Za-z\u0080-\uFFFF ']+$"
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
          pattern="^(\+?[0-9.\(\)\-\s]*)$"
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

