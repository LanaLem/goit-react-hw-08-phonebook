import { Box } from '../../constants';
import { GlobalStyle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import { fetchAll } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

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
      {isLoading && !error ? <Loader /> : <ContactList />}
    </Box>
  );
};
