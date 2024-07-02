import React, { useState, useContext} from 'react';
import { Box, Container, FormControl, TextField, Button, Typography, Alert } from '@mui/material';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import { headers } from './utils/headers';
import {useNavigate} from 'react-router-dom';
export function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[alert, setAlert] = useState({});
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/api/auth/login', 
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
    login(response.data.token);
    setAlert({severity:'success',message:response.data.msg})
    navigate('/webhookList')
  }else{
    setAlert({severity:'error',message:'Something went wrong.'})
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
          Login
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
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}
