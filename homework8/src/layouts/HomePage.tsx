import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { fetchMyExhibits } from '../store/slices/exhibitSlice';
import type { AppDispatch, RootState } from '../store/store';
import Post from '../components/Post';
import ControlBar from '../components/ControlBar'; 

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.exhibits);
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchMyExhibits());
  }, [dispatch]);

  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <ControlBar />

      <Typography variant='h5' sx={{ mb: 3, mt: 4 }}>
        Hello, {user?.username || 'Newbie'}! Your exhibits:
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {loading ? (
          <CircularProgress />
        ) : items.length > 0 ? (
          items.map((exhibit) => (
            <Post key={exhibit.id} data={exhibit} />
          ))
        ) : (
          <Typography color='text.secondary'>
            You haven't created any exhibits yet..
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;

