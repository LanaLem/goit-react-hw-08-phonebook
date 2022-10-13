import { RegisterForm } from 'components/RegisterForm';
import { Box } from 'constants';

const Register = () => {
  return (
    <Box
      p={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <RegisterForm />
    </Box>
  );
};

export default Register;
