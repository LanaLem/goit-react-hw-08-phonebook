import * as SC from './AuthNav.styled';
import { Box } from 'constants';

export const AuthNav = () => {
  return (
    <Box display="flex">
      <SC.Link to="/login">Login</SC.Link>
      <SC.Link to="/register">Register</SC.Link>
    </Box>
  );
};
