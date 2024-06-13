import React, { Fragment, useState } from 'react';
import Header from './header';
import SideNav from './sidenav';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Colors from '../../assets/styles';

function DashboardLayout() {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  }

  return (
    <Fragment>
      <Header status={status} toggleStatus={toggleStatus} />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: Colors.dashboardBgColor }}>
        <Box sx={{ display: "flex", flex: "1 1 auto", backgroundColor: Colors.dashboardBgColor }}>
          <Box sx={{ backgroundColor: Colors.dashboardBgColor }}>
            <SideNav status={status} toggleStatus={toggleStatus} />
          </Box>
          <Box sx={{ flexGrow: 1, mx: 2, mb: 2, mt: "20px", position: "relative", backgroundColor: Colors.dashboardBgColor, overflow: "auto" }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default DashboardLayout;
