import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Alert } from '@mui/material';
import { AppHeader } from './AppBar';
import { headers } from './utils/headers';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export function SubscriptionForm() {
  const [sourceUrl, setSourceUrl] = useState('');
  const [callbackUrl, setCallbackUrl] = useState('');
  const[alert, setAlert] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response = await axios.post('http://localhost:3000/api/webhooks/subscribe', { sourceUrl, callbackUrl }, {
        headers
      });
      if(response.status===201){
      setAlert({severity:'success',message:'Subscription Successful'});
      setTimeout(()=>{
        navigate('/webhookList')
      },2000)
      
      }
    } catch (error) {
      setAlert({severity:'error',message:'Something went wrong'});
    }
  };

  return (
    <Container>
    {
        alert.severity && <Alert severity={alert.severity}>{alert.message}</Alert>
    }
    <AppHeader/>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
        <Typography variant="h4" component="h1" gutterBottom>Subscribe to Webhook</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Source URL"
            variant="outlined"
            type="url"
            value={sourceUrl}
            onChange={(e) => setSourceUrl(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Callback URL"
            variant="outlined"
            type="url"
            value={callbackUrl}
            onChange={(e) => setCallbackUrl(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Subscribe</Button>
        </form>
      </Box>
    </Container>
  );
}
