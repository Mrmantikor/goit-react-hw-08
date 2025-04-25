import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import toast from 'react-hot-toast';
import s from './ContactForm.module.scss';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name is too long')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number is too long')
      .required('Required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setError(null);

      await dispatch(
        addContact({ name: values.name, number: values.number })
      ).unwrap();

      toast.success('Contact added successfully!');

      resetForm();
    } catch (err) {
      setError('Failed to add contact. Please try again.');

      toast.error('Failed to add contact. Please try again.');
      console.error('Error adding contact:', err);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className={s['contact-form']}>
          <h2 className={s['contact-form__title']}>Add New Contact</h2>

          <div className={s['contact-form__input-container']}>
            <input
              id="name"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${s['contact-form__input']} ${s['contact-form__input--name']}`}
            />
            <span className={s['contact-form__error']}>
              <ErrorMessage name="name" />
            </span>
          </div>

          <div className={s['contact-form__input-container']}>
            <input
              id="number"
              name="number"
              placeholder="Number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${s['contact-form__input']} ${s['contact-form__input--number']}`}
            />
            <span className={s['contact-form__error']}>
              <ErrorMessage name="number" />
            </span>
          </div>

          {error && <span className={s['contact-form__error']}>{error}</span>}

          <button
            type="submit"
            className={`${s['contact-form__button']} ${s['contact-form__button--submit']}`}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
