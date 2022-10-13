import { Hearts } from 'react-loader-spinner';
import { Box } from 'constants';

const Loader = () => {
  return (
    <Box
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Hearts
        height="80"
        width="80"
        ariaLabel="hearts-loading"
        color="#c06aa5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default Loader;
