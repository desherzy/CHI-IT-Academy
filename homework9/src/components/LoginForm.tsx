import { Typography, TextField, Button, Paper, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { loginUser } from '../store/slices/userSlice';
import { loginSchema } from '../utils/validationSchemas';
import type { AppDispatch } from '../store/store';

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <Box 
      component="form" 
      onSubmit={formik.handleSubmit} 
      noValidate
    >
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5">Welcome to Login Page</Typography>
        
        <TextField
          label='Email'
          name='email'
          variant='outlined'
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        
        <TextField
          label='Password'
          name='password'
          type='password'
          variant='outlined'
          fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        
        <Button 
          type="submit" 
          variant='contained' 
          color='primary' 
          fullWidth
          disabled={!formik.isValid || formik.isSubmitting}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginForm;

