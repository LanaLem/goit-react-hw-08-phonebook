import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitForm = ({ name, number }, action) => {
    const doubleContact = contacts.find(contact => contact.name === name);

    doubleContact
      ? Notify.warning(`${name} is already in contact`)
      : setContacts(prevState => [
          ...prevState,
          { id: nanoid(), name: name, number: number },
        ]);

    action.resetForm();
  };

  const onFilterContacts = () => {
    const filteredContacts = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  const onFilterInput = event => {
    return setFilter(event.target.value);
  };

  const onDeleteContact = id => {
    return setContacts(prevState =>
      prevState.filter(contact => contact.id !== id)
    );
  };

  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <GlobalStyle />
      <Box as="h2" mb={3}>
        Phonebook
      </Box>
      <ContactForm onSubmitForm={onSubmitForm} />

      <Box as="h2" mb={3}>
        Contacts
      </Box>
      <Filter onFilterInput={onFilterInput} />
      <ContactList
        contacts={onFilterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </Box>
  );
};
