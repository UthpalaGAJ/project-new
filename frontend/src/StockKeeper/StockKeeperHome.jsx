import React from 'react';
import Sidebar from '../Components/StockKeeperSidebar';
import './StockKeeperHome.css'; 
import Logo from '../images/JEDB logo.png'; // Import the logo image

const StockKeeperHome = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
        {/* Header with logo */}
        <h1 style={{ 
          backgroundColor: 'lightblue', 
          width:'100%',
          padding: '0px 0px', 
          color: 'white',
          marginTop: 0,
          display: 'flex',
          alignItems: 'center'
        }}>
          <img 
            src={Logo} // Use the imported logo image
            alt="JEDB Logo"
            style={{ height: '100px', width: '200px', marginRight: '20px' }} // Adjust the height and width of the image 
            />
          <span style={{ textAlign: 'center', flex: 1 }}>JEDB Inventory Management System</span>
        </h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
};

export default StockKeeperHome;