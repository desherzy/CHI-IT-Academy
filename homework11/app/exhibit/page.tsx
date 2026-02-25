'use client';

import { Suspense } from 'react';
import { Container, CircularProgress, Box } from '@mui/material';
import ExhibitDetails from '@/components/ExhibitDetails';

export default function ExhibitPage() {
    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }>

                <ExhibitDetails />
            </Suspense>
        </Container>
    );
};

