import * as SC from './Navigation.styled';
import { useAuth } from 'hooks';
import { Box } from 'constants';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Box display="flex">
        <SC.Link to="/" end>
          Home
        </SC.Link>
        {isLoggedIn && <SC.Link to="/contacts">Contacts</SC.Link>}
      </Box>
    </nav>
  );
};
