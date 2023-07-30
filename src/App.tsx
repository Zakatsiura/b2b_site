import { Routes, Route } from 'react-router-dom';

import {
    MainPage,
    AirCompanyPage,
    ServicePage,
    ContactPage,
    CertificatesPage,
    CamoPage,
    Part145Page,
    SalePage,
} from './pages';
import { MainLayout } from './layouts/MainLayout';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout />}>
                <Route index element={<MainPage />} />
                <Route path={'aircompany'} element={<AirCompanyPage />} />
                <Route path={'service'} element={<ServicePage />} />
                <Route path={'service/camo'} element={<CamoPage />} />
                <Route path={'service/mro'} element={<Part145Page />} />
                <Route path={'service/sale'} element={<SalePage />} />
                <Route path={'contact'} element={<ContactPage />} />
                <Route path={'certificates'} element={<CertificatesPage />} />
            </Route>
        </Routes>
    );
}

export default App;
