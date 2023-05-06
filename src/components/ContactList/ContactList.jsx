import { List, ListItem, ContactListBtn } from "./ContactList.styled"
import PropTypes from 'prop-types';

export function ContactList({ contacts, deleteButton }) {

    return (
        <List>

            {contacts.map(({id, name, number}) => (
                
                <ListItem key={id}>{name}: {number}
                <ContactListBtn type="button" onClick={()=> deleteButton(id)}>Delete</ContactListBtn>
                </ListItem>
                    
                
            ))}
           
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
        
    ).isRequired,

    deleteButton: PropTypes.func.isRequired,

}