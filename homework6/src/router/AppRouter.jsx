import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HeroPage from '../pages/HeroPage';
import HeroesPage from '../pages/HeroesPage';
import AboutPage from '../pages/AboutPage';

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/heroes' element={<HeroesPage />} >
                <Route path='/heroes/:id' element={<HeroPage />} />
            </Route>
            <Route path='/about' element={<AboutPage />} />
        </Routes>
    );
}

