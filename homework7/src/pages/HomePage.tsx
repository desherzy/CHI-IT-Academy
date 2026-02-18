import { Box, Typography } from '@mui/material';

export default function HomePage() {
    return(
        <Box>
            <Typography sx={{ textAlign: 'center' }} variant='h4' gutterBottom>Welcome!</Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body1'>
                This application about heroes of Rick & Morty.
            </Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body1' mt={2}>
                Use the navigation on the left to explore heroes from Rick and Morty API.
            </Typography>
        </Box>
    );
}

