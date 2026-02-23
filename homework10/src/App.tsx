import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import type { RootState } from './store/store';

import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './layouts/LoginPage';
import RegisterPage from './layouts/RegisterPage';
import HomePage from './layouts/HomePage';
import StripePage from './layouts/StripePage';
import NewPost from './layouts/NewPost';

const SOCKET_SERVER_URL = 'http://your-aws-instance-ip:5000'; 
const socket = io(SOCKET_SERVER_URL);

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    socket.on('notification', (data: any) => {
      console.log('WebSocket message received:', data);
      alert(`Нове сповіщення: ${data.message || 'Хтось додав новий експонат!'}`);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StripePage />} />
        <Route path='/login' element={
            <ProtectedRoute isAllowed={!isAuthenticated} redirectPath='/'>
              <LoginPage />
            </ProtectedRoute>
          } />
        <Route path='/register' element={
            <ProtectedRoute isAllowed={!isAuthenticated} redirectPath='/'>
              <RegisterPage />
            </ProtectedRoute>
          } />
        <Route path='/home' element={
            <ProtectedRoute isAllowed={isAuthenticated}>
              <HomePage />
            </ProtectedRoute>
          } />
        <Route path='/new-post' element={
            <ProtectedRoute isAllowed={isAuthenticated}>
              <NewPost />
            </ProtectedRoute>
          } />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

