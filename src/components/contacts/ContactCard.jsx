import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ContactCard = ({contact}) => {
  return (
    <Card sx={{ display: 'flex', width: '50%', height: '120px', justifyContent: 'space-between', m: 3, cursor: 'pointer' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {contact.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {contact.phone}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{width: '40%', objectFit: 'cover', objectPosition: 'top', "&:hover": {} }}
        image={contact.photo}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default ContactCard;