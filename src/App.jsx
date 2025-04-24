import './App.scss';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <>
      <a
        className="signature"
        href="https://github.com/Mrmantikor"
        target="_blank"
      >
        Bohdan Vasylovych
      </a>
      <h1>Phone book</h1>
    </>
  );
}

export default App;
