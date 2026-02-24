'use client';

import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

export default function Header() {
    return(
        <AppBar position='static' sx={{ mb: 4 }}>
            <Container maxWidth='md'>
                <Toolbar disableGutters>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        Homework 11
                    </Typography>
                    <Button color='inherit' component={Link} href='/'>
                        Home
                    </Button>
                    <Button color='inherit' component={Link} href='/posts'>
                        Posts
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

