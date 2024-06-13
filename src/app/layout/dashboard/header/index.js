import React from 'react'
import { AppBar, Box, Breadcrumbs, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import Colors from '../../../assets/styles'
import useBreadCrumb from '../../../hooks/useBreadCrumb'
import { Link } from 'react-router-dom';
import { Person, Notifications, PlaylistRemove, PlaylistPlay } from '@mui/icons-material';
import { useAuth } from '../../../context/index';

function Header({ status, toggleStatus }) {
  const { pageName } = useBreadCrumb();
  const data = window.location.pathname;
  const { userLogout } = useAuth();

  return (
    <AppBar sx={{ bgcolor: Colors.dashboardBgColor, boxShadow: 0 }}>
      <Toolbar sx={{ pr: "50px !important" }}>
        <Grid
          container
          py={3}
          // px={3}
          justifyContent={"space-between"}
        >
          <Grid item xs={12}
            sx={{
              transition: "all .3s ease-in-out",
              ml: status == false ? "270px" : 0
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Box role="presentation"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  pl: "24px"
                }}
              >
                <Breadcrumbs
                  aria-label="breadcrumb"
                  sx={{ fontSize: "16px" }}
                >
                  <Box 
                    sx={{
                      color: Colors.grey,
                      // textDecoration: "none"
                    }}
                  >
                    Dashboard
                  </Box>
                  <Typography variant="body1" sx={{ fontSize: "16px", color: Colors.black }}>
                    {pageName}
                  </Typography>
                </Breadcrumbs>
                <Box>
                  <IconButton onClick={toggleStatus}>
                    {status == true ? <PlaylistPlay /> : <PlaylistRemove />}
                  </IconButton>
                </Box>
              </Box>
              <Box > 
                <Button
                onClick={() => userLogout()}
                  sx={{
                    gap: "5px",
                    color: "#718096",
                    fontWeight: 700,
                    textTransform: "capitalize"
                  }}
                >
                  <Person />
                  {"Sign out"}
                </Button>
                <IconButton>
                  <Notifications sx={{ color: "#718096" }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header