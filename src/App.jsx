import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import PageNotFound from './pages/PageNotFound';
import DashboardPage from './pages/DashboardPage';
import Lab1Pplg from './pages/Lab1Pplg';
import Lab2Pplg from './pages/Lab2Pplg';
import Lab3Pplg from './pages/Lab3Pplg';
import Lab4Pplg from './pages/Lab4Pplg';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/dashboard/lab1pplg" element={<Lab1Pplg />} />
        <Route exact path="/dashboard/lab2pplg" element={<Lab2Pplg />} />
        <Route exact path="/dashboard/lab3pplg" element={<Lab3Pplg />} />
        <Route exact path="/dashboard/lab4pplg" element={<Lab4Pplg />} />


        <Route exact path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
