import styled from 'styled-components';
import { HiTrash } from 'react-icons/hi';

export const ContactItem = styled.div`
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${p => p.theme.radii.normal};

  &:hover,
  &:focus {
    outline: 2px solid ${p => p.theme.colors.pink};
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: flex-end;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export const DeleteIcon = styled(HiTrash)`
  color: ${p => p.theme.colors.pink};

  ${DeleteButton}:hover & {
    color: ${p => p.theme.colors.darkPink};
  }

  ${DeleteButton}:focus & {
    color: ${p => p.theme.colors.darkPink};
  }
`;
