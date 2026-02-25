'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { exhibitService } from '@/services/api';
import { Container, 
    Typography, 
    Paper, 
    Button, 
    Box, 
    CircularProgress, 
    Alert 
} from '@mui/material';
import Link from 'next/link';

export default function ExhibitDetails() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [exhibit, setExhibit] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        if (!id) {
            setError('No exhibit ID provided');
            setLoading(false);
            return;
        }
    }, [id]);

    const fetchExhibit = async () => {
        try {
            const data = await exhibitService.getOne(id!);
            setExhibit(data);
        } catch (error) {
            setError('Failed to fetch exhibit details');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <CircularProgress />
        </Box>
    );

    if (error) return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Alert severity="error">{error}</Alert>
            <Button component={Link} href="/exhibits" sx={{ mt: 2 }}>Back to list</Button>
        </Container>
    );

    return(
        <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
                {exhibit.title}
            </Typography>
            
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', my: 3 }}>
                {exhibit.description}
            </Typography>

            <Box sx={{ mt: 4, borderTop: '1px solid #eee', pt: 2 }}>
                <Button variant="outlined" component={Link} href="/exhibits">
                    Back to Exhibit
                </Button>
            </Box>
        </Paper>
    );
};

