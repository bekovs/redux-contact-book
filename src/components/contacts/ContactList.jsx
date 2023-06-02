import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from '../../store/contactsSelector';
import { getContacts } from '../../store/actions/contactsActions';
import ContactCard from './ContactCard';

const ContactList = () => {

  const { contacts } = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [])

  return (
    <div>
      {
        contacts?.map((contact, index) => (
          <ContactCard contact={contact} key={index} />
        ))
      }
    </div>
  );
};

export default ContactList;