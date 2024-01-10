import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import './css/style.css';
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
import DataBarangDipinjam from './pages/DataBarangDipinjam';
import TambahBarangDipinjam from './pages/TambahBarangDipinjam';
import PulanginBarangDipinjam from './pages/PulanginBarangDipinjam';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DataBarangDipulangkan from './pages/DataBarangDipulangkan';
import EditDataBarangDipulangkan from './pages/EditDataBarangDipulangkan';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import CreatePDF from './pages/CreatePDF';

function App() {

  const token = localStorage.getItem('xixixi');
  useEffect(() => {
    Aos.init({
      once: true
    })
  }, [])
  const queryClient = new QueryClient();

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* login page */}
      <Route exact path='/login' element={<LoginPage />} />
      {/* url dashboard */}
      <Route exact path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
      <Route exact path='/data-semua-barang' element={<PrivateRoute><DataSemuaBarang /></PrivateRoute>} />
      <Route exact path='/data-spek-semua-barang' element={<PrivateRoute><DataSpekSemuaBarang /></PrivateRoute>} />
      <Route exact path='/tambah-data-barang' element={<PrivateRoute><TambahDataBarang /></PrivateRoute>} />
      <Route exact path='/tambah-spek-data-barang' element={<PrivateRoute><TambahSpekDataBarang /></PrivateRoute>} />
      <Route exact path='/edit-data-barang/:id' element={<PrivateRoute><EditDataSemuaBarang /></PrivateRoute>} />
      <Route exact path='/edit-spek-data-barang/:id' element={<PrivateRoute><EditSpekDataBarang /></PrivateRoute>} />
      <Route exact path='/data-semua-lab' element={<PrivateRoute><DataSemuaLab /></PrivateRoute>} />
      <Route exact path='/tambah-lab' element={<PrivateRoute><TambahDataLab /></PrivateRoute>} />
      <Route exact path='/edit-lab/:id' element={<PrivateRoute><EditDataLab /></PrivateRoute>} />
      <Route exact path='/data-barang-dipinjam' element={<PrivateRoute><DataBarangDipinjam /></PrivateRoute>}/>
      <Route exact path='/data-barang-dipulangkan' element={<PrivateRoute><DataBarangDipulangkan /></PrivateRoute>} />
      {/* url lab pplg */}
      <Route exact path="/lab-1-pplg" element={<PrivateRoute><Lab1Pplg /></PrivateRoute>} />
      <Route exact path="/lab-2-pplg" element={<PrivateRoute><Lab2Pplg /></PrivateRoute>} />
      <Route exact path="/lab-3-pplg" element={<PrivateRoute><Lab3Pplg /></PrivateRoute>} />
      <Route exact path="/lab-4-pplg" element={<PrivateRoute><Lab4Pplg /></PrivateRoute>} />
        {/* url not found */}
        <Route exact path="/*" element={<PageNotFound />} />

        {/* url web pinjamin codepelita */}
        <Route exact path='/codepelita-pinjamin' element={<HomeItemBorrowed />} />
        <Route exact path='/codepelita-pinjam' element={<TambahBarangDipinjam />} />
        <Route exact path='/codepelita-pulangin' element={<PulanginBarangDipinjam />} />

        <Route exact path='/create-pdf' element={<CreatePDF />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
