import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/LoginA';
import Signup from './Login/Signup';
import ManagerHome from './Manager/ManagerHome';
import './Components/Sidebar.css';
//import StockKeeperHome from './StockKeeper/StockKeeperHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/managerhome" element={<ManagerHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
