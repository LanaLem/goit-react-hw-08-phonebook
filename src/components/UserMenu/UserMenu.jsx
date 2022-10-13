import { Box } from 'constants';
import * as SC from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box display="flex">
      <Box display="flex" mr={2} alignItems="center">
        <SC.UserIcon size={36} />
        <SC.P>
          Welcome, <SC.Span>{user.name}</SC.Span>!
        </SC.P>
      </Box>
      <SC.Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </SC.Button>
    </Box>
  );
};
