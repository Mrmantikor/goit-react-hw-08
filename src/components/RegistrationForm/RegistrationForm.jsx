import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import ReactLoading from 'react-loading';
import s from './RegistrationForm.module.scss';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async values => {
    setIsSubmitting(true);
    try {
      const action = await dispatch(register(values));
      if (action.type === 'auth/register/fulfilled') {
        toast.success('Registration successful!');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('Registration error! Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className={s['register-form']}>
      <Typography className={s['register-form__title']}>Register</Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s['register-form__form']}>
          <Box className={s['register-form__field-group']}>
            <Field
              name="name"
              type="text"
              as={TextField}
              label="Name"
              fullWidth
              variant="outlined"
              className={s['register-form__input']}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={s['register-form__error']}
            />
          </Box>

          <Box className={s['register-form__field-group']}>
            <Field
              name="email"
              type="email"
              as={TextField}
              label="Email"
              fullWidth
              variant="outlined"
              className={s['register-form__input']}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={s['register-form__error']}
            />
          </Box>

          <Box className={s['register-form__field-group']}>
            <Field
              name="password"
              type="password"
              as={TextField}
              label="Password"
              fullWidth
              variant="outlined"
              className={s['register-form__input']}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={s['register-form__error']}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            className={s['register-form__button']}
          >
            {isSubmitting ? (
              <ReactLoading
                type="spin"
                className={s['register-form__loader']}
              />
            ) : (
              'Register'
            )}
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterForm;
