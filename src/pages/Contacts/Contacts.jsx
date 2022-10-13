import { Box } from 'constants';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import Loader from 'components/Loader';
import { useEffect } from 'react';
import { fetchAll } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Box
      p={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
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

export default Contacts;
