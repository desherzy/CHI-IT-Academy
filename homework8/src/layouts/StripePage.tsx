import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import { fetchExhibits } from '../store/slices/exhibitSlice';
import type { AppDispatch, RootState } from '../store/store';
import Post from '../components/Post';
import Pagination from '../components/Pagination';

const StripePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.exhibits);

  useEffect(() => {
    dispatch(fetchExhibits());
  }, [dispatch]);

  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom align='center'>
        What's new?
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        
        {loading && <CircularProgress sx={{ my: 4 }} />}
        {error && <Alert severity="error" sx={{ width: '100%' }}>{error}</Alert>}
        {!loading && items.length > 0 ? (
          items.map((exhibit) => (
            <Post key={exhibit.id} data={exhibit} />
          ))
        ) : (
          !loading && <Typography color="text.secondary">No posts yet..</Typography>
        )}

      </Box>

      <Pagination />
    </Container>
  );
};

export default StripePage;

