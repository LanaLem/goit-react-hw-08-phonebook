import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${p => p.theme.space[2]}px;
  box-shadow: ${p => p.theme.shadow};
`;
