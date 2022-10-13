import * as SC from './Contact.styled';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { Box } from 'constants';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <SC.ContactItem>
      <Box display="flex" alignItems="center">
        <Avatar round={true} size={40} name={name} />
        <SC.P>
          {name}: {number}
        </SC.P>
      </Box>
      <SC.DeleteButton
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        <SC.DeleteIcon size={24} />
      </SC.DeleteButton>
    </SC.ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
