import { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewExhibit } from '../store/slices/exhibitSlice';
import type { AppDispatch, RootState } from '../store/store';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.exhibits);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert('Будь ласка, завантажте фото');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    const result = await dispatch(createNewExhibit(formData));
    if (createNewExhibit.fulfilled.match(result)) {
      navigate('/home');
    }
  };

  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant='h5' gutterBottom align='center'>New Exhibit</Typography>
        
        {error && <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>}

        <Box component='form' onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <TextField 
            label='Title' 
            fullWidth 
            required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField 
            label='Description' 
            multiline 
            rows={4} 
            fullWidth 
            required 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            component='label'
            variant='outlined'
            startIcon={<CloudUploadIcon />}
            sx={{ py: 1.5 }}
          >
            {image ? `File: ${image.name}` : 'Select Photo'}
            <input 
              type='file' 
              hidden 
              accept='image/*' 
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
            />
          </Button>

          <Button 
            type='submit' 
            variant='contained' 
            color='success' 
            size='large'
            disabled={loading}
          >
            {loading ? 'Publication...' : 'Publish'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default NewPost;

