
import React from 'react';
import './ContactList.css'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../api/api';

const ContactList =()=>{  
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
const dispatch = useDispatch();

const getVisibleContacts=()=>{   
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  }
  const handleDelete = itemId => {
    dispatch(deleteContact(itemId));
  };

const visibleContacts = getVisibleContacts()
return (<ul>
      {visibleContacts ? visibleContacts.map(({id, name, phone}) => (
        <li key={id} className='listData'>
          {' '} 
        {name} - {phone}
         <button className = 'listBtn' 
        onClick={()=>handleDelete(id)} id={id}>Удалить
        </button>
        </li>)) : contacts.map(({id, name, phone}) => (
        <li key={id} className='listData'>
          {' '} 
        {name} - {phone}
         <button className = 'listBtn' 
        onClick={()=>handleDelete(id)} id={id}>Удалить
        </button>
        </li>
      ))}
      </ul>)
}





export default ContactList;