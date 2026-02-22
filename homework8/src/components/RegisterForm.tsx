import { Paper, Typography, TextField, Button, Box } from '@mui/material';

const RegisterForm = () => {
    return(
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
            <Typography variant='h5' gutterBottom align='center'>
                Registration Page
            </Typography>
            
            <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField 
                    label='Username' 
                    variant='outlined' 
                    fullWidth 
                    required 
                />
                <TextField 
                    label='Email' 
                    type='email' 
                    variant='outlined' 
                    fullWidth 
                    required 
                />
                <TextField 
                    label='Password' 
                    type='password' 
                    variant='outlined' 
                    fullWidth 
                    required 
                />
                <TextField 
                    label='Confirm Password' 
                    type='password' 
                    variant='outlined' 
                    fullWidth 
                    required 
                />
                
                <Button 
                    variant='contained' 
                    color='primary' 
                    size='large' 
                    fullWidth 
                    sx={{ mt: 1 }}
                >
                    Create account
                </Button>
            </Box>
        </Paper>
  );
};

export default RegisterForm;

