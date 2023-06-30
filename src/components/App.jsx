
import React from 'react';
import ContactForm from 'components/FormPhonebook/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getContacts } from './api/api';

const App = () => {
const {contacts} = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);



    return (<div>
      <h1>Phonebook</h1>
      <ContactForm/>
    <Filter />
       
      {contacts.length !== 0 ? (
        <>
      <h2>Contacts</h2>
      <ContactList />
      </>) :  (
        false
      )}
    </div>) 
    } 

    export default App ;