import { LoginForm } from 'components/LoginForm';
import { Box } from 'constants';

const Login = () => {
  return (
    <Box
      p={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <LoginForm />
    </Box>
  );
};

export default Login;
