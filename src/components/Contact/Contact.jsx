import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { HiPhone, HiUser } from 'react-icons/hi';
import s from './Contact.module.scss';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await dispatch(deleteContact(id)).unwrap();
    } catch (error) {
      console.error('Failed to delete contact:', error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={s.contact}>
      <div className={s.contact__info}>
        <div className={s.contact__name}>
          <HiUser style={{ marginRight: '10px' }} size="24" />
          {name}
        </div>
        <div className={s.contact__number}>
          <HiPhone style={{ marginRight: '10px' }} size="24" />
          {number}
        </div>
      </div>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className={`${s.contact__button} ${s['contact__button--delete']}`}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
};

export default Contact;
