import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = ({ name, number }, action) => {
    const doubleContact = this.state.contacts.find(
      contact => contact.name === name
    );

    doubleContact
      ? Notify.warning(`${name} is already in contact`)
      : this.setState(prevState => {
          return {
            contacts: [
              ...prevState.contacts,
              { name: name, id: nanoid(), number: number },
            ],
          };
        });

    action.resetForm();
  };

  onFilterContacts = () => {
    const { filter } = this.state;

    const filteredContacts = this.state.contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  onFilterInput = event => {
    return this.setState({ filter: event.target.value });
  };

  onDeleteContact = id => {
    return this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => {
          return contact.id !== id;
        }),
      };
    });
  };

  render() {
    const { onSubmitForm, onFilterInput, onFilterContacts, onDeleteContact } =
      this;

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
  }
}
