import styled from 'styled-components';
import { HiUser } from 'react-icons/hi';

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: ${p => p.theme.colors.pink};
  box-shadow: ${p => p.theme.shadow};
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};

  cursor: pointer;
  transition-property: transform;
  transition-timing-function: linear;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const P = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserIcon = styled(HiUser)`
  margin-right: ${p => p.theme.space[2]}px;
  border: 1px solid ${p => p.theme.colors.pink};
  border-radius: ${p => p.theme.radii.round};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.pink};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.pink};
`;
