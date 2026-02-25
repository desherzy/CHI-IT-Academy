'use client';

import RegisterForm from "@/components/RegisterForm";
import { Container, Paper, Typography } from "@mui/material";

export default function RegisterPage() {
  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>
        <RegisterForm />
      </Paper>
    </Container>
  );
};

