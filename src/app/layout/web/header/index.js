import React, { useState } from 'react';
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  CardMedia,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Images from '../../../assets/images';
import { PrimaryButton, SecondaryButton } from '../../../components/Buttons';
import Colors from '../../../assets/styles';
import { useNavigate } from 'react-router-dom';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenDrawer = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const pages = ['Home', 'Catalog', 'How it Works', 'Pricing', 'Blog', 'Services', 'Use Cases', 'Need Help?'];

  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: Colors.backgroundColor2 }}>
        <Container>
          <Toolbar disableGutters>
            <CardMedia
              component={"img"}
              src={Images.logo}
              sx={{
                width: "160px",
                objectFit: "contain",
                display: { xs: 'none', md: 'block' }
              }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenDrawer}
                sx={{
                  color: Colors.primary
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor='left'
                open={open}
                onClose={handleCloseDrawer}
                PaperProps={{
                  sx: {
                    width: "60%",
                    background: Colors.backgroundColor1
                  }
                }}
              >
                <List>
                  {pages.map((item, ind) => (
                    <ListItem key={ind}>
                      <ListItemButton>
                        <ListItemText sx={{ color: Colors.textColor1 }} primary={item} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <ListItem>
                    <PrimaryButton title={"Login"} />
                  </ListItem>
                  <ListItem>
                    <SecondaryButton title={"Register"} />
                  </ListItem>
                </List>
              </Drawer>
            </Box>
            <CardMedia
              component={"img"}
              src={Images.logo}
              sx={{
                width: "160px",
                objectFit: "contain",
                display: { xs: 'flex', md: 'none' }, mr: 1
              }}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: "center"
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseDrawer}
                  sx={{ my: 2, color: 'white', display: 'block', color: Colors.textColor1, textTransform: "capitalize" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: "16px"
              }}
            >
              <PrimaryButton
                title={"Login"}
                onClick={() => navigate("/login")}
              />
              <SecondaryButton
                title={"Register"}
                onClick={() => navigate("/register")}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header