import React, { useState } from 'react';
import { Box, Container, FormControl, TextField, Button, Typography, Alert } from '@mui/material';
import { headers } from './utils/headers';
import axios from 'axios';
export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const[alert, setAlert] = useState({});
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert({severity:"error",message:"Password does not match!"})
    } else {
      const response = await axios.post('http://localhost:3000/api/auth/register', 
      {
        email,
        password
      },
      {
        headers
      }
    )
    console.log("response",response);
    if(response.status===201){
      setAlert({severity:'success',message:response.data.msg})
    }else{
      setAlert({severity:'error',message:'Something went wrong.'})
    }
    }
    setTimeout(()=>{
      setAlert({});
    },2000)
  };

  return (
    <Container>
    {
      alert.severity && <Alert onClose={()=>setAlert({})} severity={alert.severity}>{alert.message}</Alert>
    }
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 5,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email Address"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}
