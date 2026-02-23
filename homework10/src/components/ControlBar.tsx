import { Paper, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const ControlBar = () => {
  const navigate = useNavigate();

  return (
    <Paper elevation={2} sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
      <Button 
        variant='contained' 
        color='success' 
        startIcon={<AddIcon />}
        onClick={() => navigate('/new-post')}
      >
        Create exhibition
      </Button>
    </Paper>
  );
};

export default ControlBar;