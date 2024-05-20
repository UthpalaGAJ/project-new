import React from 'react';
import Sidebar from '../Components/Sidebar';
import './ManagerHome.css'; // Import the CSS for additional styles
import Logo from '../images/JEDB logo.png'; // Import the logo image

const ManagerHome = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        {/* Header with logo */}
        <header className="header">
          <img 
            src={Logo} 
            alt="JEDB Logo"
            className="logo"
          />
          <span>JEDB Inventory Management System</span>
        </header>
        
        <div className="metrics">
          <div className="metric-box" style={{ backgroundColor: '#f28b82' }}>
            <h2>Total Number of Users</h2>
            <p>150</p>
          </div>
          <div className="metric-box" style={{ backgroundColor: '#fbbc04' }}>
            <h2>Available Tea Product Stock</h2>
            <p>200</p>
          </div>
          <div className="metric-box" style={{ backgroundColor: '#34a853' }}>
            <h2>Available Tea Powder Stock</h2>
            <p>350</p>
          </div>
        </div>

        <div className="graphs">
          <h2>Inventory Graphs</h2>
          {/* Replace with actual graphs */}
          <div className="graph-placeholder">Graph 1</div>
          <div className="graph-placeholder">Graph 2</div>
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
