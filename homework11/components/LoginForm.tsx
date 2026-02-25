'use client';

import { useState } from 'react';
import { authService } from '../services/api';
import { useRouter } from 'next/navigation';
import { TextField,
    Button,
    Box,
    Typography,
    Alert
} from '@mui/material';
import Link from 'next/link';

export default function LoginForm() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [validationError, setValidationError] = useState({ email: '', password: '' });
    const [serverError, setServerError] = useState('');
    const router = useRouter();

    const validate = () => {
        let tempErrors = { email: '', password: '' };
        let isValid = true;

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Invalid email format';
            isValid = false;
        }

        // password validation
        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setValidationError(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setServerError('');

        if (validate()) {
            try {
                const res = await authService.login(formData);
                router.push('/exhibits');
                router.refresh();
            } catch (error: any) {
                setServerError(error.message || 'Login failed');
            }
        }
    };

    return(
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {serverError && <Alert severity="error" sx={{ mb: 2 }}>{serverError}</Alert>}
            
            <TextField
                fullWidth
                label="Email Address"
                margin="normal"
                value={formData.email}
                error={!!validationError.email}
                helperText={validationError.email}
                onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (validationError.email) setValidationError({ ...validationError, email: '' });
                }}
            />
            
            <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={formData.password}
                error={!!validationError.password}
                helperText={validationError.password}
                onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    if (validationError.password) setValidationError({ ...validationError, password: '' });
                }}
            />
            
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
            </Button>
        
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2">
                    Don't have an account?{' '}
                    <Link href="/register" style={{ color: '#1976d2', textDecoration: 'none' }}>
                        Register here
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};
