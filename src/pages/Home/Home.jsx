import { Box } from 'constants';

import TemplateLogOut from '../../constants/HomeGifLogOut.gif';
import TemplateLogIn from '../../constants/HomeGifLogIn.gif';
import { useAuth } from 'hooks';
import * as SC from './Home.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      p={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {isLoggedIn ? (
        <>
          <h2>Welcome!</h2>
          <p>Now you can use the phonebook to the fullest!</p>
          <p>
            Go to the page <SC.Link to="contacts"> Сontacts </SC.Link> and add
            the necessary contacts!
          </p>
          <p>Have a good day!</p>
          <SC.HeartIcon size={36} />
          <img src={TemplateLogIn} alt="Welcome" width={280} />
        </>
      ) : (
        <>
          <h2>Hello!</h2>
          <p>You entered the contact book.</p>
          <p>Here you can save contacts that are important to you.</p>
          <p>
            In order to use its features, please
            <SC.Link to="login"> Log in </SC.Link>
          </p>
          <p>
            or
            <SC.Link to="register"> Sign up </SC.Link> if you do not have an
            account yet.
          </p>
          <img src={TemplateLogOut} alt="Hello" width={280} />
        </>
      )}
    </Box>
  );
};

export default Home;
