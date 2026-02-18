import { useState, useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { fetchHeroes } from '../api/fetchHeroes';

import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import HeroDrawer from '../components/HeroDrawer';

export default function HeroesPage() {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect( () => {
        fetchHeroes().then(data => setRows(data));
    }, []);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 2 },
        { field: 'status', headerName: 'Status', flex: 1 },
    ];  

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <DataGrid 
                    rows={rows}
                    columns={columns}
                    autoHeight
                    onRowClick={(params) => navigate(`/heroes/${params.id}`)}
                    sx={{
                        '& .MuiDataGrid-row': {
                            cursor: 'pointer',
                        },
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: 'action.hover',
                        },
                    }}
                />
            </Box>
            <Outlet />
            <HeroDrawer id={id} onClose={ () => navigate('/heroes') } />
        </>
    );
}

