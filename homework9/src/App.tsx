import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';

import ProtectedRoute from './components/ProtectedRoute';

import LoginPage from './layouts/LoginPage';
import RegisterPage from './layouts/RegisterPage';
import HomePage from './layouts/HomePage';
import StripePage from './layouts/StripePage';
import NewPost from './layouts/NewPost';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

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

