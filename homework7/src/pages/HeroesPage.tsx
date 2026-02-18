import { useNavigate, Outlet } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { fetchHeroes } from '../api/heroes.api';

import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Box, CircularProgress } from '@mui/material';

export default function HeroesPage() {
    const navigate = useNavigate();
    const { data: rows, error, loading } = useRequest(fetchHeroes);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 2 },
        { field: 'status', headerName: 'Status', flex: 1 },
    ];

    if (loading) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}><CircularProgress /></Box>
    if (error) return <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>Error loading heroes</Box>

    return(
        <>
            <Box sx={{ width: '100%' }}>
                <DataGrid 
                    rows={rows || []}
                    columns={columns}
                    autoHeight
                    onRowClick={(params) => navigate(`/heroes/${params.id}`)}
                    sx={{ cursor: 'pointer' }}
                />
            </Box>
            <Outlet />
        </>
    );
}

