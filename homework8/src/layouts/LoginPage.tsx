import { Box, Container, Link } from '@mui/material';
import LoginForm from '../components/LoginForm';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => (
  <Container maxWidth='sm'>
    <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <LoginForm />
      <Box sx={{ mt: 2 }}>
        <Link component={RouterLink} to='/register' variant='body2'>
          Don't have an account? Register here.
        </Link>
      </Box>
    </Box>
  </Container>
);

export default LoginPage;

