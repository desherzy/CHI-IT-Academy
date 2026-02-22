import { useState } from 'react';
import { Typography, TextField, Button, Paper, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/userSlice';
import type { AppDispatch } from '../store/store';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5">Welcome to Login Page</Typography>
        <TextField
          label='Email'
          variant='outlined'
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant='contained' color='primary' fullWidth>
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginForm;

