import React from 'react';
import './search.css'


function Search({placeholder,handleChange}){
    return (
      
            <input 
            className='search'
            type="search" 
            placeholder={placeholder} 
            onChange={handleChange}
            />
   
    )
}


export default Search