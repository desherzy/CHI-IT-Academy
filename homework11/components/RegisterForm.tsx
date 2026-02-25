'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/api';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import Link from 'next/link';

export default function RegisterForm() {
    const [formData, setFormData] = useState({ email: '', password: '', repeatPassword: '' });
    const [validationError, setValidationError] = useState({ email: '', password: '', repeatPassword: '' });
    const [serverError, setServerError] = useState('');
    const router = useRouter();

    const validate = () => {
        let tempErrors = { email: '', password: '', repeatPassword: '' };
        let isValid = true;

        //email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Invalid email format';
            isValid = false;
        }

        //password validation
        if (!formData.password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        //repeat password validation
        if (!formData.repeatPassword) {
            tempErrors.repeatPassword = 'Please confirm your password';
            isValid = false;
        } else if (formData.password !== formData.repeatPassword) {
            tempErrors.repeatPassword = 'Passwords do not match';
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
                await authService.register(formData);
                router.push('/login');
            } catch (error) {
                console.error(error);
                setServerError('Registration failed. Please try again.');
            }
        }
    };

    return (
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

            <TextField
                fullWidth
                label="Repeat Password"
                type="password"
                margin="normal"
                value={formData.repeatPassword}
                error={!!validationError.repeatPassword}
                helperText={validationError.repeatPassword}
                onChange={(e) => {
                    setFormData({ ...formData, repeatPassword: e.target.value });
                    if (validationError.repeatPassword) setValidationError({ ...validationError, repeatPassword: '' });
                }}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
            </Button>

            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2">
                    Already have an account?{' '}
                    <Link href="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>
                        Login here
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
};

