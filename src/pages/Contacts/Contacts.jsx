import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import s from './Contacts.module.scss';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contacts}>
      <h1 className={s.contacts__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contacts__subtitle}>Contacts</h2>
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;
