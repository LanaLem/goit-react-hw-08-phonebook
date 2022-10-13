import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  InputForm,
  LabelForm,
  FormOfContact,
  ButtonForm,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const schema = yup.object().shape({
  email: yup.string().email().required('Please enter your email'),
  password: yup
    .string()
    .min(6, 'Password must contain at least 6 characters ')
    .required('Please enter your password'),
});

const initialValues = { email: '', password: '' };

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (credential, action) => {
    dispatch(logIn(credential));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <FormOfContact>
        <LabelForm htmlFor="email">
          Email
          <InputForm type="email" name="email" />
          <ErrorMessage name="email" render={msg => Notify.warning(msg)} />
        </LabelForm>
        <LabelForm htmlFor="password">
          Password
          <InputForm type="password" name="password" />
          <ErrorMessage name="password" render={msg => Notify.warning(msg)} />
        </LabelForm>
        <ButtonForm type="submit">Login</ButtonForm>
      </FormOfContact>
    </Formik>
  );
};
