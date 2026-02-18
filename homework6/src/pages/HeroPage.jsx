import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Drawer, Box, Typography } from '@mui/material';

export default function HeroPage() {
    const { id } = useParams();
    const [hero, setHero] = useState(null);

    useEffect( () => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => setHero(data));
    }, [id]);

    if (!hero) return null;

    return(
        <Drawer anchor='right' open={true} variant='persistent'>
            <Box>
                <img src={hero.image} width='100%' />
                <Typography variant='h6'>{hero.name}</Typography>
                <Typography>Status: {hero.status}</Typography>
            </Box>
        </Drawer>
    );
}

