import { Routes, Route } from 'react-router-dom';

import {
    MainPage,
    AirCompanyPage,
    ServicePage,
    ContactPage,
    CertificatesPage,
    CamoPage,
    Part145Page,
    PartMPage,
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
                <Route path={'service/part-145'} element={<Part145Page />} />
                <Route path={'service/part-m'} element={<PartMPage />} />
                <Route path={'contact'} element={<ContactPage />} />
                <Route path={'certificates'} element={<CertificatesPage />} />
            </Route>
        </Routes>
    );
}

export default App;
