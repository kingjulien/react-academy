import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Teams from './pages/Teams';
import Team from './pages/Team';

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
