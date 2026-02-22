import { Container, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
    return (
        <Container maxWidth="sm">
            <Box 
                sx={{ 
                minHeight: '80vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center' 
                }}
            >
                <RegisterForm />
                
                <Box sx={{ mt: 2 }}>
                    <Link component={RouterLink} to='/login' variant='body2'>
                        Alreaddy have an account? Login.
                    </Link>
                </Box>
            </Box>
        </Container>
  );
};

export default RegisterPage;

