'use client';

import LoginForm from "@/components/LoginForm";
import { Container, Paper, Typography, Box } from "@mui/material";

export default function LoginPage() {
    return (
        <Container maxWidth="xs" sx={{ mt: 10 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                    <Typography variant="h5" fontWeight="bold">
                        Welcome Back
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Please enter your details to sign in
                    </Typography>
                </Box>
                
                <LoginForm />
            </Paper>
        </Container>
    );
};

