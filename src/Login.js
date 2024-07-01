import React, { useState } from 'react';
import { Box, Container, FormControl, TextField, Button, Typography, Alert } from '@mui/material';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[alert, setAlert] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setAlert({severity:"error",message:"Password does not match!"})
    //   setTimeout(()=>{
    //     setAlert({})
    //   },2000)
    // } else {
    //   // Handle form submission
    //   console.log({ email, password, confirmPassword });
    // }
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
