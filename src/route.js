import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/details/:id" element={<Home />} />
    </Routes>
  );
}

export default Router;
