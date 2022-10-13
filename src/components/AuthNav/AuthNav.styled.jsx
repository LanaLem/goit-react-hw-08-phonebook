import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.pink};
  text-decoration: none;
  box-shadow: ${p => p.theme.shadow};
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.bold};

  transition-property: transform;
  transition-timing-function: linear;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &.active {
    background-color: ${p => p.theme.colors.darkPink};
    transform: scale(1.03);
  }
`;
