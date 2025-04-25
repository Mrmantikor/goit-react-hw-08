import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import s from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async values => {
    try {
      const action = await dispatch(login(values));
      if (action.type === 'auth/login/fulfilled') {
        toast.success('Login successful!');
      }
    } catch {
      toast.error('Invalid email or password!');
    }
  };

  return (
    <Box className={s['login-form']}>
      <Typography className={s['login-form__title']}>Log In</Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s['login-form__form']}>
          <Box className={s['login-form__field-group']}>
            <Field
              name="email"
              type="email"
              as={TextField}
              label="Email"
              fullWidth
              variant="outlined"
              className={s['login-form__input']}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={s['login-form__error']}
            />
          </Box>

          <Box className={s['login-form__field-group']}>
            <Field
              name="password"
              type="password"
              as={TextField}
              label="Password"
              fullWidth
              variant="outlined"
              className={s['login-form__input']}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={s['login-form__error']}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={s['login-form__button']}
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
