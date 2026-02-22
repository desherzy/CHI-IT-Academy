import { Typography, IconButton, Paper } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Comment = () => (
    <Paper variant='outlined' sx={{ p: 1.5, mb: 1, position: 'relative' }}>
        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>User Name</Typography>
        <Typography variant='body2'>Limited 2000 symbols...</Typography>
        <Typography variant='caption' color='text.secondary'>28.12.2003</Typography>
        <IconButton size='small' sx={{ position: 'absolute', top: 5, right: 5 }} color='error'>
        <DeleteOutlineIcon fontSize='small' />
        </IconButton>
    </Paper>
);

export default Comment;

