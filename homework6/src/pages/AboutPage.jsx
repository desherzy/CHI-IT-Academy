import { Box, Typography } from '@mui/material';

export default function AboutPage() {
    return(
        <Box>
            <Typography sx={{ textAlign: 'center' }} variant='h4' gutterBottom>About</Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body1'>This application was created as a homework project by Roman MEDVID.</Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body1' mt={2}>Technologies used:</Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body2'>- React</Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body2'>- React Router</Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body2'>- Material UI</Typography>
            <Typography sx={{ textAlign: 'center' }} variant='body2'>- Rick & Morty API</Typography>
        </Box>
    );
}

