import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import NotFoundPage from '../pages/404';

export const RouteSetup: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
