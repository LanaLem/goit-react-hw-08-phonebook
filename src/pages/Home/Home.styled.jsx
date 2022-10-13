import styled from 'styled-components';
import { HiHeart } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const HeartIcon = styled(HiHeart)`
  color: ${p => p.theme.colors.red};
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.pink};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
