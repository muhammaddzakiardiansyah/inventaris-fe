import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';
import AOS from 'aos';
import './charts/ChartjsConfig';

// Import pages
import PageNotFound from './pages/PageNotFound';
import DashboardPage from './pages/DashboardPage';
import Lab1Pplg from './pages/Lab1Pplg';
import Lab2Pplg from './pages/Lab2Pplg';
import Lab3Pplg from './pages/Lab3Pplg';
import Lab4Pplg from './pages/Lab4Pplg';
import DataSemuaBarang from './pages/DataSemuaBarang';
import DataSpekSemuaBarang from './pages/DataSpekSemuaBarang';
import TambahDataBarang from './pages/TambahDataBarang';
import EditDataSemuaBarang from './pages/EditDataSemuaBarang';
import EditSpekDataBarang from './pages/EditSpekDataBarang';
import TambahSpekDataBarang from './pages/TambahSpekDataBarang';
import DataSemuaLab from './pages/DataSemuaLab';
import TambahDataLab from './pages/TambahDataLab';
import EditDataLab from './pages/EditDataLab';
import HomeItemBorrowed from './pages/HomeItemBorrowed';

function App() {

  AOS.init()

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
  return (
      <Routes>
        {/* url dashboard */}
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path='/data-semua-barang' element={<DataSemuaBarang />} />
        <Route exact path='/data-spek-semua-barang' element={<DataSpekSemuaBarang />} />
        <Route exact path='/tambah-data-barang' element={<TambahDataBarang />} />
        <Route exact path='/tambah-spek-data-barang' element={<TambahSpekDataBarang />} />
        <Route exact path='/edit-data-barang/:id' element={<EditDataSemuaBarang />} />
        <Route exact path='/edit-spek-data-barang/:id' element={<EditSpekDataBarang />} />
        <Route exact path='/data-semua-lab' element={<DataSemuaLab />} />
        <Route exact path='/tambah-lab' element={<TambahDataLab />} />
        <Route exact path='/edit-lab/:id' element={<EditDataLab />} />
        {/* url lab pplg */}
        <Route exact path="/lab-1-pplg" element={<Lab1Pplg />} />
        <Route exact path="/lab-2-pplg" element={<Lab2Pplg />} />
        <Route exact path="/lab-3-pplg" element={<Lab3Pplg />} />
        <Route exact path="/lab-4-pplg" element={<Lab4Pplg />} />
        {/* url not found */}
        <Route exact path="/*" element={<PageNotFound />} />

        {/* url web pinjamin codepelita */}
        <Route exact path='/codepelita-pinjamin' element={<HomeItemBorrowed />} />
      </Routes>
  );
}

export default App;
