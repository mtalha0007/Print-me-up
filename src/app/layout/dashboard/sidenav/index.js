import React, { Fragment, useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CardMedia,
  IconButton,
  Collapse,
} from "@mui/material";
import Colors from "../../../assets/styles";
import styled from "@emotion/styled";
import Images from "../../../assets/images";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../../Navigation";
import useBreadCrumb from "../../../hooks/useBreadCrumb";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 270;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  ...theme.mixins.toolbar,
}));

export default function SideNav({ status, toggleStatus }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setName } = useBreadCrumb();
  const [expand, setExpand] = useState([]);
  console.log("🚀 ~ SideNav ~ expand:", expand);

  const handleToggleSubMenu = (name) => {
    setExpand((prevState) => ({
      [name]: !prevState[name],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          transition: "all .3s ease-in-out",
          width: status == false ? drawerWidth : 50,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            transition: "all .3s ease-in-out",
            width: status == false ? drawerWidth : 0,
            boxSizing: "border-box",
            background: Colors.dashboardBgColor,
            borderRight: "1px solid rgb(193 192 192 / 13%)",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DrawerHeader>
          <CardMedia
            component={"img"}
            src={Images.logo}
            sx={{
              width: "110px",
              objectFit: "contain",
            }}
          />
        </DrawerHeader>
        <Divider
          className="divider"
          sx={{ borderColor: "rgba(193, 192, 192, 12%)" }}
        />
        <List sx={{ pl: "36px", py: 2 }}>
          {Navigation.map((item, index) => {
            const isSelected= item.path === pathname ? true : false;
            return item.name == "Hardcoded" ? (
              <ListItem
                key={index}
                sx={{
                  p: "12px 16px",
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{
                    span: {
                      fontSize: "16px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    },
                  }}
                />
              </ListItem>
            ) : item.subMenu ? (
              <Fragment>
                <ListItem
                  key={index}
                  sx={{
                    p: 0,
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      handleToggleSubMenu(item.name);
                    }}
                    sx={{
                      transition: "all .3s ease-in-out",
                      backgroundColor:
                        expand[item.name] == true
                          ? Colors.white
                          : "transparent",
                      borderRadius: "18px",
                      p: "12px 16px",
                      ":hover": {
                        backgroundColor:
                          expand[item.name] == true
                            ? Colors.white
                            : "transparent",
                      },
                      boxShadow:
                        expand[item.name] == true
                          ? "rgba(0, 0, 0, 0.04) 0px 7px 11px"
                          : 0,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "52px" }}>
                      {React.cloneElement(item.icon, {
                        sx: {
                          fontSize: "18px",
                          color:
                            expand[item.name] == true
                              ? Colors.white
                              : Colors.secondary,
                          borderRadius: "12px",
                          p: "7px",
                          backgroundColor:
                            expand[item.name] == true
                              ? Colors.secondary
                              : Colors.white,
                          boxShadow: "rgba(0, 0, 0, 0.04) 0px 7px 11px",
                        },
                      })}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        color:
                          expand[item.name] == true
                            ? Colors.black
                            : Colors.grey,
                        span: {
                          fontWeight: 600,
                          fontSize: "14px !important",
                        },
                      }}
                    />
                    {expand[item.name] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={expand[item.name]}>
                  <List sx={{ p: "8px 0px" }}>
                    {item.subMenu.map((subMenu, subInd) => (
                      <ListItem key={subInd} sx={{ p: "0px 8px 0px 8px" }}>
                        <ListItemButton
                          sx={{ p: 0 }}
                          onClick={() => {
                            navigate(subMenu.path);
                            setName(subMenu.name);
                          }}
                        >
                          <ListItemIcon
                            sx={{ minWidth: "52px", justifyContent: "center" }}
                          >
                            {React.cloneElement(subMenu.icon, {
                              sx: {
                                color: Colors.secondary,
                                fontSize:
                                  pathname == subMenu.path ? "12px" : "8px",
                              },
                            })}
                          </ListItemIcon>
                          <ListItemText
                            primary={subMenu.name}
                            sx={{
                              span: {
                                color:
                                  pathname == subMenu.path
                                    ? Colors.black
                                    : Colors.grey,
                                fontWeight:
                                  pathname == subMenu.path ? 600 : 400,
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Fragment>
            ) : (
              <Fragment>
                <ListItem
                  key={index}
                  sx={{
                    p:0,
                    pb: 2,
                  }}
                >
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                      setName(item.name);
                      handleToggleSubMenu(item.name);
                    }}
                    sx={{
                      transition: "all .3s ease-in-out",
                      backgroundColor:
                        isSelected
                          ? Colors.white
                          : "transparent",
                      borderRadius: "18px",
                      p: "12px 16px",
                      ":hover": {
                        backgroundColor:
                          isSelected
                            ? Colors.white
                            : "transparent",
                      },
                      boxShadow:
                        isSelected
                          ? "rgba(0, 0, 0, 0.04) 0px 7px 11px"
                          : 0,
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "52px" }}>
                      {React.cloneElement(item.icon, {
                        sx: {
                          fontSize: "18px",
                          color:
                            isSelected
                              ? Colors.white
                              : Colors.secondary,
                          borderRadius: "12px",
                          p: "7px",
                          backgroundColor:
                            isSelected
                              ? Colors.secondary
                              : Colors.white,
                          boxShadow: "rgba(0, 0, 0, 0.04) 0px 7px 11px",
                        },
                      })}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        color:
                          isSelected
                            ? Colors.black
                            : Colors.grey,
                        span: {
                          fontWeight: 600,
                          fontSize: "14px !important",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Fragment>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}
