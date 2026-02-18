import { useRequest } from 'ahooks';
import { fetchHeroesById } from '../api/hero.api';
import { Hero } from '../types/hero.types';

import { Drawer, Box, Typography, IconButton, CircularProgress, Icon } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface HeroDrawerProps {
    id: string | undefined;
    onClose: () => void;
}

export default function HeroDrawer({ id, onClose }: HeroDrawerProps) {
    const { data: hero, loading } = useRequest<Hero, [string]>(() => fetchHeroesById(id!), {
        refreshDeps: [id],
    });

    return (
        <Drawer anchor='right' open={Boolean(id)} onClose={onClose}>
            <Box sx={{ width: 320, p: 2 }}>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>

                {loading && <CircularProgress />}
                
                {hero && (
                    <>
                        <img src={hero.image} width='100%' />
                        <Typography variant='h6'>{hero.name}</Typography>
                        <Typography>{hero.status}</Typography>
                        <Typography>{hero.species}</Typography>
                    </>
                )}
            </Box>
        </Drawer>
    );
}

