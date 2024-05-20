import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InfoIcon from '@mui/icons-material/Info';
import AssessmentIcon from '@mui/icons-material/Assessment';

const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '../Manager/ManagerHome'
  },
  {
    title: 'Tea Product Inventory',
    icon: <InventoryIcon />,
    link: '../Common/TeaProductStock'
  },
  {
    title: 'Tea Powder Inventory',
    icon: <InventoryIcon />,
    link: '../Common/TeaProwderStock'
  },
  {
    title: 'Manage Accounts',
    icon: <ManageAccountsIcon />,
    link: '../Manager/UserManagement'
  },
  {
    title: 'Supplier Details',
    icon: <InfoIcon />,
    link: '../Common/SupplierDetails'
  },
  {
    title: 'Reports',
    icon: <AssessmentIcon />,
    link: '../Manager/Reports'
  }
];

export default SidebarData;
