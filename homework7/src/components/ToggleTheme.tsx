import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ListItemButton, ListItemText } from '@mui/material';

export default function ToggleTheme() {
    const context = useContext(ThemeContext);

    if (!context) return null;

    const { mode, toggleTheme } = context;

    return(
        <ListItemButton onClick={toggleTheme}>
            <ListItemText primary={mode === 'light' ? '🌙 Night Mode' : '☀️ Day Mode'}/>
        </ListItemButton>
    );
}

