import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as SC from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup.string().email().required('Please enter your email'),
  password: yup
    .string()
    .min(6, 'Password must contain at least 6 characters ')
    .required('Please enter your password'),
});

const initialValues = { name: '', email: '', password: '' };

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (credentials, action) => {
    dispatch(register(credentials));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <SC.FormOfContact>
        <SC.LabelForm htmlFor="name">
          Name
          <SC.InputForm type="text" name="name" />
          <ErrorMessage name="name" render={msg => Notify.warning(msg)} />
        </SC.LabelForm>
        <SC.LabelForm htmlFor="email">
          Email
          <SC.InputForm type="email" name="email" />
          <ErrorMessage name="email" render={msg => Notify.warning(msg)} />
        </SC.LabelForm>
        <SC.LabelForm htmlFor="password">
          Password
          <SC.InputForm type="password" name="password" />
          <ErrorMessage name="password" render={msg => Notify.warning(msg)} />
        </SC.LabelForm>
        <SC.ButtonForm type="submit">Register</SC.ButtonForm>
      </SC.FormOfContact>
    </Formik>
  );
};
