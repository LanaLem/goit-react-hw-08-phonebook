import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import { AuthNav } from '../AuthNav';
import * as SC from './AppBar.styled';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SC.Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </SC.Header>
  );
};
