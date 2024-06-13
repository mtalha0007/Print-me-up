import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Colors from '../../assets/styles';

function Layout() {
  return (
    <Box>
      <Header />
      <Box
        component={"main"}
        sx={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: Colors.backgroundColor1
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout