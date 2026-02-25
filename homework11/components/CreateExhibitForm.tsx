'use client';

import { useState } from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import { useRouter } from 'next/navigation';
import { exhibitService } from '@/services/api';

export default function CreateExhibitForm() {
    const [formData, setFormData] = useState({ title: '', description: '' });
    const [validationError, setValidationError] = useState({ title: '', description: '' });
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const validate = () => {
        let tempErrors = { title: '', description: '' };
        let isValid = true;

        // title validation
        if (!formData.title.trim()) {
            tempErrors.title = 'Title must be at least 5 characters long';
            isValid = false;
        } else if (formData.title.length < 5) {
            tempErrors.title = 'Title must be at least 5 characters long';
            isValid = false;
        }

        // description validation
        if (!formData.description.trim()) {
            tempErrors.description = 'Description must be at least 20 characters long';
            isValid = false;
        } else if (formData.description.length < 20) {
            tempErrors.description = 'Description must be at least 20 characters long';
            isValid = false;
        }

        setValidationError(tempErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setServerError('');

        if (validate()) {
            setLoading(true);

            try {
                exhibitService.create(formData);
                router.push('/exhibits');
                router.refresh();
            } catch (error: any) {
                setServerError(error.message || 'Failed to create exhibit');
            } finally {
                setLoading(false);
            }
        }
    };

    return(
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {serverError && <Alert severity="error" sx={{ mb: 2 }}>{serverError}</Alert>}
        
            <TextField
                fullWidth
                label="Title"
                margin="normal"
                value={formData.title}
                error={!!validationError.title}
                helperText={validationError.title}
                onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                    if (validationError.title) setValidationError({ ...validationError, title: '' });
                }}
            />
        
            <TextField
                fullWidth
                label="Description"
                margin="normal"
                multiline
                rows={4}
                value={formData.description}
                error={!!validationError.description}
                helperText={validationError.description}
                onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (validationError.description) setValidationError({ ...validationError, description: '' });
                }}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
            >
                {loading ? 'Saving...' : 'Publish'}
            </Button>
        </Box>
    );
};

