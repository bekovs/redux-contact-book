import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../../store/actions/contactsActions';

const style = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '30%',
    margin: '30px auto'
  },
  inps: {
    width: "100%"
  },
  button: {
    width: "100%"
  },
  label: {
    fontWeight: '700'
  }
}

const ContactAdd = () => {
  const [newContact, setNewContact] = useState({
    name: '',
    phone: '',
    photo: '',
  })

  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //? Для предотвращения перезагрузки страницы. (submit)
    if(!newContact.name.trim() || !newContact.phone.trim()){
      setShowError(true);
      return;
    }
    dispatch(addContact(newContact));
    navigate('/')
  }

  const handleChange = (e) => {
    setShowError(false);
    setNewContact({
      ...newContact,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Box sx={style.box} component={"form"} onSubmit={(e) => handleSubmit(e)}>
      <Typography sx={style.label} variant='h5'>Add new contact</Typography>
      <TextField 
        sx={style.inps}
        label="Name"
        name="name"
        value={newContact.name}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        sx={style.inps}
        label="Phone"
        name="phone"
        value={newContact.phone}
        onChange={(e) => handleChange(e)}
       />
      <TextField
        sx={style.inps}
        label="Photo"
        name="photo"
        value={newContact.photo}
        onChange={(e) => handleChange(e)}
      />
      <Button sx={style.button} variant='contained' type='submit'>Add</Button>
      {
        showError ? 
        <Typography variant='h6' sx={{color:'red'}}>
          Убедитесь что name и phone заполнены!
        </Typography>
        :
        <></>
      }
    </Box>
  );
};

export default ContactAdd;