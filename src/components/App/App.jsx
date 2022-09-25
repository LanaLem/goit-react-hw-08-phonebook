import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export const App = () => {
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
      <ContactForm />

      <Box as="h2" mb={3}>
        Contacts
      </Box>
      <Filter />
      <ContactList />
    </Box>
  );
};
