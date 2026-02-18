import { useState, useEffect } from 'react';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function HeroDrawer({ id, onClose }) {
    const [hero, setHero] = useState(null);

    useEffect( () => {
        if (!id) return;

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then(data => setHero(data));
    }, [id])

    return(
        <Drawer anchor="right" open={Boolean(id)} onClose={onClose}>
            <Box sx={{ width: 300, p: 2 }}>
                {hero && (
                    <>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>

                        <img src={hero.image} alt={hero.name} width='100%' />
                        <Typography variant='h6' mt={2}>{hero.name}</Typography>
                        <Typography>Status: {hero.status}</Typography>
                        <Typography>Species: {hero.species}</Typography>
                        <Typography>Gender: {hero.gender}</Typography>
                    </>
                )}
            </Box>
        </Drawer>
    );
}

