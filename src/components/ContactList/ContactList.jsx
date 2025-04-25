import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import s from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.contacts__list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
