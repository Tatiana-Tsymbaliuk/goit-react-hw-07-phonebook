import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const taskSlice = createSlice({
name: 'phonebook',
initialState:{
        contacts:{
                items: [],
                isLoading: false,
                error: null
              },
        filter: '',
},
reducers:{
        addContact:{
                reducer(state, action){
                state.contacts.push(action.payload)
        },
        prepare(name, phone) {
                return{
                payload:{
                id:nanoid(),        
                name,
                phone,
        },};},},

        removeContact(state, action){
        state.contacts = state.contacts.filter(contact=>contact.id !== action.payload)
        },
        filterContact(state, action){
            state.filter = action.payload;
        },},
})


export const {addContact, removeContact, filterContact } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;