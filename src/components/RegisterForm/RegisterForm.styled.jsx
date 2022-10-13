import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormOfContact = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const LabelForm = styled.label`
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-right: ${p => p.theme.space[2]}px;
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-decoration: overline ${p => p.theme.colors.pink};
  text-shadow: ${p => p.theme.shadow};

  &:hover,
  &:focus {
    text-decoration: overline ${p => p.theme.colors.darkPink};
  }
`;

export const InputForm = styled(Field)`
  width: 270px;
  padding: ${p => p.theme.space[3]}px;
  border: 2px solid ${p => p.theme.colors.pink};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  ${LabelForm}:hover & {
    border-color: ${p => p.theme.colors.darkPink};
  }

  ${LabelForm}:focus & {
    border-color: ${p => p.theme.colors.darkPink};
  }
`;

export const ButtonForm = styled.button`
  width: auto;
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  background-color: ${p => p.theme.colors.pink};
  box-shadow: ${p => p.theme.shadow};
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.darkPink};
  }
`;
