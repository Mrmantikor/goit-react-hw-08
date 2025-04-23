import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./ContactForm.module.scss";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `The "Name" is too Short!`)
    .max(50, `The "Name" is too Long!`)
    .required('The "Name" is Required field!'),
  number: Yup.string()
    .min(3, `The "Number" is too Short!`)
    .max(50, `The "Number" is too Long!`)
    .required('The "Number" is Required field!'),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles["form-container"]}>
          <label className={styles["field-label"]}>Name</label>
          <div className={styles["input-group"]}>
            <Field className={styles["input-field"]} type="text" name="name" />
            <ErrorMessage
              className={styles["error-message"]}
              name="name"
              component="div"
            />
          </div>

          <label className={styles["field-label"]}>Number</label>
          <div className={styles["input-group"]}>
            <Field
              className={styles["input-field"]}
              type="tel"
              inputMode="tel"
              name="number"
            />
            <ErrorMessage
              className={styles["error-message-large"]}
              name="number"
              component="div"
            />
          </div>

          <button
            className={styles["submit-btn"]}
            type="submit"
            disabled={isSubmitting}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
