import React from 'react';
import { useNavigate } from 'react-router-dom';
import StockKeeperSidebarData from './StockKeeperSidebarData';
import './Sidebar.css';

function StockKeeperSidebar() {
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {StockKeeperSidebarData.map((val, key) => (
          <li 
            key={key}
            className="row"
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={() => navigate(val.link)}
          >
            <div id="icon">{val.icon}</div>
            <div id="title">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockKeeperSidebar;
