'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Container 
} from '@mui/material';
import ToggleTheme from './ToggleTheme';
import Link from 'next/link';

export default function Header() {
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsAuth(!!Cookies.get('token'));
        
    }, []);
    const handleLogout = () => {
        Cookies.remove('token');
        setIsAuth(false);
        router.push('/login');
        router.refresh();
    };

    return(
        <AppBar position='static' sx={{ mb: 4 }}>
            <Container maxWidth='md'>
                <Toolbar disableGutters>
                    <ToggleTheme />
                    
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        Homework 11
                    </Typography>
                    <Button color='inherit' component={Link} href='/'>
                        Home
                    </Button>
                    <Button color='inherit' component={Link} href='/posts'>
                        Posts
                    </Button>
                    {isAuth ? (
                        <Button color="inherit" onClick={handleLogout}>Log out</Button>
                    ) : (
                        <Button color="inherit" href="/login" component={Link}>Log in</Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

