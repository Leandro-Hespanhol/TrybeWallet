import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Routes>
      <Route path="/TrybeWallet" element={ <Login /> } />
      <Route exact path="/TrybeWallet/carteira" element={ <Wallet /> } />
    </Routes>
  );
}

export default App;
