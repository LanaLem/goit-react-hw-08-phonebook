import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const InputFilter = styled.input`
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  border: none;
  outline: none;
`;

export const LabelFilter = styled.label`
  padding-bottom: ${p => p.theme.space[2]}px;

  width: 360px;
  display: flex;
  flex-direction: column;

  text-decoration: overline ${p => p.theme.colors.pink};
  text-shadow: ${p => p.theme.shadow};

  &:hover,
  &:focus {
    text-decoration: overline ${p => p.theme.colors.darkPink};
  }
`;

export const FilterWrap = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid ${p => p.theme.colors.pink};
  border-radius: ${p => p.theme.radii.normal};
  margin-top: ${p => p.theme.space[2]}px;

  ${LabelFilter}:hover & {
    border-color: ${p => p.theme.colors.darkPink};
  }

  ${LabelFilter}:focus & {
    border-color: ${p => p.theme.colors.darkPink};
  }
`;

export const IconSearch = styled(HiSearch)`
  font-size: 38px;
  color: ${p => p.theme.colors.pink};

  ${LabelFilter}:hover & {
    color: ${p => p.theme.colors.darkPink};
  }

  ${LabelFilter}:focus & {
    color: ${p => p.theme.colors.darkPink};
  }
`;
