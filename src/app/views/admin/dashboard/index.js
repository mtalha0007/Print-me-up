import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  TableSortLabel,
  IconButton,
  TableBody,
  TableRow,
  Button,
  Menu,
  MenuItem,
  Checkbox,
  ListItemText,
  CardMedia,
  ListItem,
  List,
  Avatar,
  ListItemIcon,
} from "@mui/material";
import Images from "../../../assets/images";
import Colors from "../../../assets/styles";
import {
  AccountBalanceWallet,
  Language,
  FileCopy,
  ShoppingCart,
  Settings,
} from "@mui/icons-material";
import { get } from "../../../api";
import axios from "axios";

const tableHead = [
  {
    name: "country",
    label: "COUNTRY",
    sortOrder: { column: "country", direction: "asc" },
    visible: true,
  },
  {
    name: "sales",
    label: "SALES",
    sortOrder: { column: "sales", direction: "asc" },
    visible: true,
  },
  {
    name: "value",
    label: "VALUE",
    sortOrder: { column: "value", direction: "asc" },
    visible: true,
  },
  {
    name: "bounce",
    label: "BOUNCE",
    sortOrder: { column: "bounce", direction: "asc" },
    visible: true,
  },
];

const tableBody = [
  {
    country: "USA",
    sales: "15%",
    value: 2,
    bounce: 0.2,
  },
  {
    country: "CA",
    sales: "12%",
    value: 3,
    bounce: 0.2,
  },
  {
    country: "UAE",
    sales: "22%",
    value: 5,
    bounce: 1.2,
  },
  {
    country: "BRA",
    sales: "10%",
    value: 8,
    bounce: 0.1,
  },
  {
    country: "MOR",
    sales: "25%",
    value: 4,
    bounce: 2.2,
  },
];

const cardData = [
  {
    title: "Today's Moneys",
    value: "$53,000",
    icon: <AccountBalanceWallet />,
  },
  {
    title: "Today's Users",
    value: "2300",
    icon: <Language />,
  },
  {
    title: "New Clients",
    value: "+3,020",
    icon: <FileCopy />,
  },
  {
    title: "Total Sales",
    value: "$53,000",
    icon: <ShoppingCart />,
  },
];
const tableHead2 = [
  {
    name: "id",
    label: "ID",
    visible: true,
    sortOrder: { column: "id", direction: "asc" },
  },
  {
    name: "title",
    label: "Title",
    visible: true,
    sortOrder: { column: "title", direction: "asc" },
  },
  {
    name: "description",
    label: "Description",
    visible: true,
    sortOrder: { column: "description", direction: "asc" },
  },
  {
    name: "category",
    label: "Category",
    visible: true,
    sortOrder: { column: "category", direction: "asc" },
  },
  {
    name: "price",
    label: "Price",
    visible: true,
    sortOrder: { column: "price", direction: "asc" },
  },
  {
    name: "discountPercentage",
    label: "Discounted Price",
    visible: true,
    sortOrder: { column: "discountPercentage", direction: "asc" },
  },
  {
    name: "rating",
    label: "Rating",
    visible: true,
    sortOrder: { column: "rating", direction: "asc" },
  },
  {
    name: "stock",
    label: "Stock",
    visible: true,
    sortOrder: { column: "stock", direction: "asc" },
  },
  {
    name: "tags",
    label: "Tags",
    visible: true,
    sortOrder: { column: "tags", direction: "asc" },
  },
  {
    name: "sku",
    label: "SKU",
    visible: true,
    sortOrder: { column: "sku", direction: "asc" },
  },
  {
    name: "weight",
    label: "Weight",
    visible: true,
    sortOrder: { column: "weight", direction: "asc" },
  },
  {
    name: "dimensions",
    label: "Dimensions",
    visible: true,
    sortOrder: { column: "dimensions", direction: "asc" },
  },
  {
    name: "warrantyInformation",
    label: "Warranty Information",
    visible: true,
    sortOrder: { column: "warrantyInformation", direction: "asc" },
  },
  {
    name: "shippingInformation",
    label: "Shipping Information",
    visible: true,
    sortOrder: { column: "shippingInformation", direction: "asc" },
  },
  {
    name: "availabilityStatus",
    label: "Availability Status",
    visible: true,
    sortOrder: { column: "availabilityStatus", direction: "asc" },
  },
  {
    name: "returnPolicy",
    label: "Return Policy",
    visible: true,
    sortOrder: { column: "returnPolicy", direction: "asc" },
  },
  {
    name: "minimumOrderQuantity",
    label: "Minimum Order Quantity",
    visible: true,
    sortOrder: { column: "minimumOrderQuantity", direction: "asc" },
  },
  {
    name: "reviews",
    label: "Reviews",
    visible: true,
    sortOrder: { column: "reviews", direction: "asc" },
  },
  {
    name: "thumbnail",
    label: "Thumbnail",
    visible: true,
    sortOrder: { column: "thumbnail", direction: "asc" },
  },
  {
    name: "meta",
    label: "Meta",
    visible: true,
    sortOrder: { column: "meta", direction: "asc" },
  },
];

const ITEM_HEIGHT = 48;

function Dashboard() {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [anchor, setAnchor] = useState(null);

  const handleSort = (column) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.name === column
          ? {
              ...col,
              sortOrder: {
                column,
                direction: col.sortOrder.direction === "asc" ? "desc" : "asc",
              },
            }
          : col
      )
    );
    const sortedRows = [...rows].sort((a, b) => {
      const direction = columns.find((col) => col.name === column).sortOrder
        .direction;
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setRows(sortedRows);
  };

  const handleToggleColumn = (column) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.name === column ? { ...col, visible: !col.visible } : col
      )
    );
  };

  const handleSettingsClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchor(null);
  };

  const getAll = async () => {
    try {
      const  {data}  = await axios.get("https://dummyjson.com/products")
  console.log(data)
      const tableHead = Object.keys(data.products[0]).map((key) => ({
        name: key,
        label: key.toUpperCase(),
        sortOrder: { column: "country", direction: "asc" },
        visible: true,
      }));

      const tableBody = data.products.map((item) => {
        let obj = {};
        tableHead.forEach((value) => {
          obj[value.name] =
            typeof item[value.name] === "object"
              ? JSON.stringify(item[value.name])
              : item[value.name];
        });
        obj.visible = true;
        // console.log("🚀 ~ tableBody ~ obj:", obj);
        return obj;
      });

      setColumns(tableHead);
      setRows(tableBody);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Box>
    <Grid container>
      <Box
        sx={{
          backgroundImage: `url(${Images.globe3d})`,
          height: { xs: "300px", md: "700px" },
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "calc(100% + 200px)" },
        }}
      />
      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          top: { xs: "10%", md: "15%" },
          pl: 3,
        }}
      >
        <Grid container rowGap={"18px"}>
          <Grid item xs={12}>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "30px" },
                fontWeight: 700,
                pl: "26px",
              }}
            >
              General Statistics
            </Typography>
          </Grid>
          <Grid item xs={12} md={7.5}>
            <Grid container spacing={2}>
              {cardData.map((item, ind) => (
                <Grid item xs={12} sm={12} md={6} lg={6} key={ind}>
                  <Box
                    sx={{
                      p: 3,
                      background: Colors.white,
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      boxShadow: "rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        variant={"body2"}
                        sx={{ color: Colors.grey, fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                        {item.value}
                      </Typography>
                    </Box>
                    {React.cloneElement(item.icon, {
                      sx: {
                        fontSize: "22px",
                        borderRadius: "12px",
                        p: "10px",
                        backgroundColor: Colors.secondary,
                        color: Colors.white,
                      },
                    })}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={7.5}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 3,
                    background: Colors.white,
                    borderRadius: "15px",
                    display: "flex",
                    boxShadow: "rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                      Sales By Country
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={anchor ? "long-menu" : undefined}
                        aria-expanded={anchor ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleSettingsClick}
                      >
                        <Settings />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchor}
                        open={Boolean(anchor)}
                        onClose={handleSettingsClose}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              filter:
                                "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                              overflow: "visible",
                              "&::before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                left: 15,
                                width: 10,
                                height: 10,
                                bgcolor: "background.paper",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 1,
                              },
                              ".MuiList-root": {
                                p: 0,
                              },
                            },
                          },
                        }}
                      >
                        <Box
                          component={"div"}
                          sx={{
                            maxHeight: ITEM_HEIGHT * 4.5,
                            overflowY: "auto",
                          }}
                        >
                          {columns.map((col) => (
                            <MenuItem key={col.name}>
                              <Checkbox
                                checked={col.visible}
                                onChange={() => handleToggleColumn(col.name)}
                              />
                              <ListItemText primary={col.label} />
                            </MenuItem>
                          ))}
                        </Box>
                      </Menu>
                    </Box>
                  </Box>
                  <TableContainer sx={{ height: "400px" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          {tableHead2.map(
                            (cell) =>
                              cell.visible && (
                                <TableCell key={cell.name}>
                                  <TableSortLabel
                                    active={
                                      cell.sortOrder.column === cell.name
                                    }
                                    direction={cell.sortOrder.direction}
                                    onClick={() => handleSort(cell.name)}
                                    sx={{
                                      svg: {
                                        fontSize: "12px",
                                        color: `${Colors.grey} !important`,
                                      },
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        color: Colors.grey,
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      {cell.label}
                                    </Typography>
                                  </TableSortLabel>
                                </TableCell>
                              )
                          )}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>
                              <Typography
                                sx={{ width: "200px", fontSize: "12px" }}
                              >
                                {product.description}
                              </Typography>
                            </TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                              {product.discountPercentage}
                            </TableCell>
                            <TableCell>{product.rating}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>
                              <List>
                                {JSON.parse(product.tags).map((tag) => (
                                  <ListItem key={tag}>
                                    <ListItemText primary={tag} />
                                  </ListItem>
                                ))}
                              </List>
                            </TableCell>
                            <TableCell>{product.sku}</TableCell>
                            <TableCell>{product.weight}</TableCell>
                            <TableCell>
                              {JSON.parse(product.dimensions).width} x{" "}
                              {JSON.parse(product.dimensions).height} x{" "}
                              {JSON.parse(product.dimensions).depth}
                            </TableCell>
                            <TableCell>
                              {product.warrantyInformation}
                            </TableCell>
                            <TableCell>
                              {product.shippingInformation}
                            </TableCell>
                            <TableCell>
                              {product.availabilityStatus}
                            </TableCell>
                            <TableCell>{product.returnPolicy}</TableCell>
                            <TableCell>
                              {product.minimumOrderQuantity}
                            </TableCell>
                            <TableCell>
                              <List>
                                {JSON.parse(product.reviews).map((review) => (
                                  <ListItem key={review.reviewerEmail}>
                                    <ListItemIcon>
                                      <Avatar>{review.rating}</Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={review.comment}
                                      primaryTypographyProps={{
                                        component: "span",
                                        style: { fontSize: "11px" },
                                      }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </TableCell>
                            <TableCell>
                              <img
                                src={product?.thumbnail}
                                alt="Product"
                                style={{ width: "100px" }}
                              />
                            </TableCell>
                            <TableCell>
                              <List>
                                {Object.entries(JSON.parse(product.meta)).map(
                                  ([key, value]) => (
                                    <ListItem key={key}>
                                      <ListItemText
                                        primaryTypographyProps={{
                                          component: "span",
                                          style: { fontSize: "11px" },
                                        }}
                                        primary={`${key}: ${value}`}
                                      />
                                    </ListItem>
                                  )
                                )}
                              </List>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  );
}

export default Dashboard;
