import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import AppRouter from '../router/AppRouter';

export default function MainLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${240}px`,
          width: `calc(100% - ${240}px)`,
        }}
      >
        <AppRouter />
      </Box>
    </Box>
  );
}

