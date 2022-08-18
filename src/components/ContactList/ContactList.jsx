import { ListOfContacts, Contact, DeleteButton } from './ContactList.styled';
import { Box } from 'constants';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListOfContacts>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <p>
            {name}: {number}
          </p>
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            delete
          </DeleteButton>
        </Contact>
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
  onDeleteContact: PropTypes.func.isRequired,
};
