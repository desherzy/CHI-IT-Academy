import { useFormik } from 'formik';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';
import { registerSchema } from '../utils/validationSchemas';

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            //dispatch(registerUser(values));
            console.log('Дані форми відправлено:', values);
        },
    });

    return (
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
            <Typography variant='h5' gutterBottom align='center'>
                Registration Page
            </Typography>

            <Box 
                component='form' 
                onSubmit={formik.handleSubmit} 
                sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
            >
                <TextField
                    label='Username'
                    name='username'
                    variant='outlined'
                    fullWidth
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                
                <TextField
                    label='Email'
                    name='email'
                    type='email'
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
                
                <TextField
                    label='Confirm Password'
                    name='confirmPassword'
                    type='password'
                    variant='outlined'
                    fullWidth
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />

                <Button
                    type='submit'
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