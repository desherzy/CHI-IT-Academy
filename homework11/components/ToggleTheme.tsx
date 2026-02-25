'use client';

import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppTheme } from '@/components/ThemeProvider';
import { useTheme } from '@mui/material/styles';

export default function ToggleTheme() {
    const { toggleTheme } = useAppTheme();
    const theme = useTheme();

    return (
        <IconButton onClick={toggleTheme} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
};

