import { useParams, useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { fetchHeroesById } from '../api/hero.api';

import { Drawer, Box, Typography, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function HeroPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { data: hero, loading } = useRequest(() => fetchHeroesById(id!), {
        refreshDeps: [id],
    });

    const handleClose = () => navigate('/heroes');

    return(
        <Drawer anchor="right" open={true} onClose={handleClose}>
            <Box sx={{ width: 320, p: 3 }}>
                <IconButton onClick={handleClose} sx={{ mb: 1 }}>
                    <CloseIcon />
                </IconButton>

                {loading ? (
                    <CircularProgress />
                ) : hero ? (
                    <>
                        <img src={hero.image} alt={hero.name} style={{ width: '100%', borderRadius: '8px' }} />
                        <Typography variant='h5' mt={2}>{hero.name}</Typography>
                        <Typography color="text.secondary">Status: {hero.status}</Typography>
                        <Typography>Species: {hero.species}</Typography>
                        <Typography>Gender: {hero.gender}</Typography>
                        
                    </>
                ) : null}
            </Box>
        </Drawer>
    );
}

