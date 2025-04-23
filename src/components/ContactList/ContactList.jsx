import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.scss";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles["contacts-grid"]}>
      {contacts.map(({ id, number, name }) => (
        <Contact key={id} id={id} number={number} name={name} />
      ))}
    </ul>
  );
};

export default ContactList;
