import { ListOfContacts } from './ContactList.styled';
import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter, getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListOfContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ListOfContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
