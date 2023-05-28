import { Routes, Route, Navigate } from 'react-router-dom';

import { MainPage, AirCompanyPage, ServicePage, ContactPage } from './pages';
import { MainLayout } from './layouts/MainLayout';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<Navigate to={'main'} />} />
                <Route path={'main'} element={<MainPage />} />
                <Route path={'aircompany'} element={<AirCompanyPage />} />
                <Route path={'service'} element={<ServicePage />} />
                <Route path={'contact'} element={<ContactPage />} />
            </Route>
        </Routes>
    );
}

export default App;
