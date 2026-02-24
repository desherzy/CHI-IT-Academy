'use client';

import { useEffect } from 'react';
import { Button, Typography, Container } from '@mui/material';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error)
    }, [error]);

    return(
        <Container sx={{ py: 10, textAlign: 'center' }}>
            <Typography variant='h5' gutterBottom>
                Something went wrong!
            </Typography>
            <Button variant='contained' onClick={() => reset()}>
                Try again
            </Button>
        </Container>
    );
};

