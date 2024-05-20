import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import InfoIcon from '@mui/icons-material/Info';

const StockKeeperSidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '../StockKeeper/StockKeeperHome'
  },
  {
    title: 'Tea Product Inventory',
    icon: <InventoryIcon />,
    link: '../Common/TeaProductStock'
  },
  {
    title: 'Tea Powder Inventory',
    icon: <InventoryIcon />,
    link: '../Common/TeaPowderStock'
  },
  {
    title: 'Supplier Details',
    icon: <InfoIcon />,
    link: '../Common/SupplierDetails'
  },
];

export default StockKeeperSidebarData;
