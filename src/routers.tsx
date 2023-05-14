import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import Form from './pages/Form/Form';
import { Route, Routes } from 'react-router';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default Routers;
