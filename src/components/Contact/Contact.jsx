import { ContactItem, DeleteButton, DeleteIcon } from './Contact.styled';
import PropTypes from 'prop-types';

export const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        delete <DeleteIcon />
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
