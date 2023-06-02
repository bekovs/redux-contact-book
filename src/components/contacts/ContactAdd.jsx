import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault(); //? Для предотвращения перезагрузки страницы. (submit)
    console.log(newContact)
  }

  const handleChange = (e) => {
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
    </Box>
  );
};

export default ContactAdd;