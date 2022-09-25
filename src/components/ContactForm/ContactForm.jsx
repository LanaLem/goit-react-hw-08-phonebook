import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  InputForm,
  LabelForm,
  FormOfContact,
  ButtonForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const nameErrorMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const numberErrorMessage =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const emptyNameError = 'Field name is empty, please enter name of contact';
const emptyNumberError =
  'Field number is empty, please enter number of contact';

const schema = yup.object().shape({
  name: yup
    .string()
    .required(emptyNameError)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      nameErrorMessage
    ),
  number: yup
    .string()
    .required(emptyNumberError)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      numberErrorMessage
    ),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmitForm = ({ name, number }, action) => {
    contacts.find(contact => contact.name === name)
      ? Notify.warning(`${name} is already in contact`)
      : dispatch(addContact(name, number));

    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <FormOfContact>
        <LabelForm htmlFor="name">
          Name
          <InputForm type="text" name="name" />
          <ErrorMessage name="name" render={msg => Notify.warning(msg)} />
        </LabelForm>
        <LabelForm htmlFor="number">
          Number
          <InputForm type="tel" name="number" />
          <ErrorMessage name="number" render={msg => Notify.warning(msg)} />
        </LabelForm>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormOfContact>
    </Formik>
  );
};
