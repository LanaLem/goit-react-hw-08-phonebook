import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  width: 360px;
`;

export const Contact = styled.li`
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
  display: flex;
  justify-content: space-between;
  border-radius: ${p => p.theme.radii.normal};

  &:hover,
  &:focus {
    outline: 2px solid ${p => p.theme.colors.pink};
  }
`;

export const DeleteButton = styled.button`
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: ${p => p.theme.colors.pink};
  box-shadow: ${p => p.theme.shadow};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.darkPink};
  }
`;
