import React from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarData from './SidebarData';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => (
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

export default Sidebar;
