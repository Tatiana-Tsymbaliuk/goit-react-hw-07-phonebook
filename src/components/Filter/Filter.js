import React from 'react';
import './Filter.css'
import { useSelector, useDispatch } from 'react-redux';

import { filterContact } from 'components/redux/taskSlice';
const Filter =()=>{
       const filter = useSelector(state=>state.filter);
        const dispatch = useDispatch();
        const handelFilter = e =>{ console.log(e);
                
                dispatch(filterContact(e.target.value));
                
        }
        
return(
        <label className='filterData'>Find contacts by name
        <input className = 'filterInput' 
        type='text'
        value={filter} 
        onChange={e=>handelFilter(e)}/>
        </label>
)
}


export default Filter;