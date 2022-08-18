import styled from 'styled-components';

export const ListOfContacts = styled.ul`
  width: 360px;
`;

export const Contact = styled.li`
  margin-bottom: ${p => p.theme.space[2]}px;
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: ${p => p.theme.colors.pink};
  box-shadow: ${p => p.theme.shadow};

  cursor: pointer;

  ${Contact}:hover & {
    background-color: ${p => p.theme.colors.darkPink};
  }

  ${Contact}:focus & {
    background-color: ${p => p.theme.colors.darkPink};
  }
`;
