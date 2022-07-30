import React, { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) =>{

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Para que no adicione a la lista espacions vacios
        //trim() quita los espacions anteriores al momento de escribir
        if (inputValue.trim().length > 2){
            setCategories( plants => [inputValue,...plants]);
            setInputValue('');
        }
    };

    return(
        <form onSubmit={handleSubmit}> 
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder= "Busca tu gif  "
            
            />
            
        </form>
    )
}

AddCategory.prototype = {

    setCategories: PropTypes.func.isRequired
}