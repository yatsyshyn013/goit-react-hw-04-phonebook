import React from 'react'

import { FindArea } from 'components/Filter/Filter.styled';
import PropTypes from 'prop-types';


export function Filter({onChange, value}) {

    return (
         <label htmlFor="name">
              <FindArea>Find contacts by name</FindArea>
                    <input 
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onChange}
                value={value}
                          />
                </label>
    )
   
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}