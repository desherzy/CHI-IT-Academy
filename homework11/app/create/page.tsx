'use client';

import CreatePostForm from "@/components/CreateExhibitForm";
import { Container, Paper, Typography, Box } from "@mui/material";

export default function CreatePage() {
    return (
        <Container maxWidth="sm" sx={{ mt: 6 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        New exhibit
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Fill out the form.
                    </Typography>
                </Box>
                
                <CreatePostForm />
            </Paper>
        </Container>
    );
};

