
import {useState, useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { click } from '@testing-library/user-event/dist/click';




export default function App() {

  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState("")
  const [click, setClick] = useState(0)

  useEffect(() => {

        // fbq('track', 'ViewContent');
       const contactList = localStorage.getItem('contact');
       const parsedContacts = JSON.parse(contactList);

       if (parsedContacts) {
        setContacts([...parsedContacts])
       }
    
  }, [])

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contact', JSON.stringify(contacts))
    }

    
    
  }, [contacts])

  const onAddContactBtn = (newContact) => {
      setContacts(prevState => [...contacts, newContact]
        )
  }
  
  const onFilterChange = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  }
  
  const getFilteredContacts = () => {

    const normalizeTarget = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeTarget));
    // console.log(filteredContacts);

  }

   const deleteButton = id => {
   setContacts(prevState => prevState.filter(contact => contact.id !== id)
      )
  }

  const handleClickPurchase = () => {
        fbq('track', 'click');
        setClick(click + 1)
        console.log(1);
  }

  return (
      <PhoneBookContainer>
        <h1>PhoneBook</h1>
        <ContactForm
          contacts={contacts}
          onAddContactBtn={onAddContactBtn}
        />

        <h2>Contacts</h2>
        <Filter
          onChange={onFilterChange}
          value={filter}
        />
        <ContactList
          contacts={getFilteredContacts()}
          deleteButton={deleteButton}
      />
      
        <button onClick={handleClickPurchase}>{click}</button>
    

        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
      </PhoneBookContainer>
      
    );
}

