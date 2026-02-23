import { Container, Paper, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { createNewExhibit } from '../store/slices/exhibitSlice';
import { postSchema } from '../utils/validationSchemas';
import type { AppDispatch, RootState } from '../store/store';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const NewPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.exhibits);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: null as File | null,
    },
    validationSchema: postSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      if (values.image) {
        formData.append('image', values.image);
      }

      const result = await dispatch(createNewExhibit(formData));
      if (createNewExhibit.fulfilled.match(result)) {
        navigate('/home');
      }
    },
  });

  return (
    <Container maxWidth='md' sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant='h5' gutterBottom align='center'>New Exhibit</Typography>
        
        {error && <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>}

        <Box 
          component='form' 
          onSubmit={formik.handleSubmit} 
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <TextField 
            label='Title' 
            name='title'
            fullWidth 
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          
          <TextField 
            label='Description' 
            name='description'
            multiline 
            rows={4} 
            fullWidth 
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />

          <Box>
            <Button
              component='label'
              variant='outlined'
              startIcon={<CloudUploadIcon />}
              fullWidth
              color={formik.touched.image && formik.errors.image ? 'error' : 'primary'}
              sx={{ py: 1.5 }}
            >
              {formik.values.image ? `File: ${formik.values.image.name}` : 'Select Photo'}
              <input 
                type='file' 
                hidden 
                accept='image/*' 
                onChange={(e) => {
                  const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
                  formik.setFieldValue('image', file);
                }}
              />
            </Button>
            {formik.touched.image && formik.errors.image && (
              <Typography variant="caption" color="error" sx={{ mt: 1, ml: 2 }}>
                {formik.errors.image as string}
              </Typography>
            )}
          </Box>

          <Button 
            type='submit' 
            variant='contained' 
            color='success' 
            size='large'
            disabled={loading || !formik.isValid}
          >
            {loading ? 'Publication...' : 'Publish'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default NewPost;

