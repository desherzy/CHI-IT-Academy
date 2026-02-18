import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import ToggleTheme from './ToggleTheme';

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <Drawer variant='permanent' anchor='left'>
            <List sx={{ width: 240 }}>
                <ListItemButton onClick={ () => navigate('/') }>
                    <ListItemText primary='Home' />
                </ListItemButton>
                <ListItemButton onClick={ () => navigate('/heroes') }>
                    <ListItemText primary='Heroes' />
                </ListItemButton>
                <ListItemButton onClick={ () => navigate('/about') }>
                    <ListItemText primary='About' />
                </ListItemButton>

                <ToggleTheme />
            </List>
        </Drawer>
    );
}

