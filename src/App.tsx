import { Routes, Route } from 'react-router-dom';

import {
    MainPage,
    AirCompanyPage,
    ServicePage,
    ContactPage,
    CertificatesPage,
} from './pages';
import { MainLayout } from './layouts/MainLayout';

function App() {
    return (
        <Routes >
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<MainPage />} />
                <Route path={'aircompany'} element={<AirCompanyPage />} />
                <Route path={'service'} element={<ServicePage />} />
                <Route path={'contact'} element={<ContactPage />} />
                <Route path={'certificates'} element={<CertificatesPage />} />
            </Route>
        </Routes>
    );
}

export default App;
