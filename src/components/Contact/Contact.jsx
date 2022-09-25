import { ContactItem, DeleteButton, DeleteIcon } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon size={24} />
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
