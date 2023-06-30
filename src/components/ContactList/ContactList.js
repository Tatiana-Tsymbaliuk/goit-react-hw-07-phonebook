
import React from 'react';
import './ContactList.css'
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'components/redux/taskSlice';

const ContactList =()=>{  
const {contacts, filter} = useSelector(state => state.phonebook);
const dispatch = useDispatch();

const getVisibleContacts=()=>{   
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  }

const visibleContacts = getVisibleContacts()
return (<ul>
      {visibleContacts ? visibleContacts.map(({id, name, number}) => (
        <li key={id} className='listData'>
          {' '} 
        {name} - {number}
         <button className = 'listBtn' 
        onClick={()=>dispatch(removeContact(id))}>Удалить
        </button>
        </li>)) : contacts.map(({id, name, number}) => (
        <li key={id} className='listData'>
          {' '} 
        {name} - {number}
         <button className = 'listBtn' 
        onClick={()=>dispatch(removeContact(id))}>Удалить
        </button>
        </li>
      ))}
      </ul>)
}





export default ContactList;