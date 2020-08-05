import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import Profile from './pages/Profile';
import Repo from './pages/Repo'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      
      <Header/>
      <Routes>
        <Route path='/' />
        <Route path='/:username' element={<Profile/>}/>
        <Route path='/:username/:reponame' element={<Repo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
