import React, { useEffect, useState } from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Checkbox,
  Box,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { CheckCircle, Cancel, Autorenew } from "@mui/icons-material";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Colors from "../../../assets/styles";

// Sample data

const OrderTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("date");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rows = [
    {
      id: "10421",
      date: "1 Nov, 10:20 AM",
      status: "Paid",
      customer: "Sebastian Koga",
      product: "Nike Sport V2",
      revenue: 23146,
    },
    {
      id: "10422",
      date: "1 Nov, 10:53 AM",
      status: "Paid",
      customer: "Iryna Innda",
      product: "Valvet T-shirt",
      revenue: 83133,
    },
    {
      id: "10423",
      date: "1 Nov, 11:13 AM",
      status: "Refunded",
      customer: "Arrias Liunda",
      product: "Nike Air Force",
      revenue: 48476,
    },
    {
      id: "10424",
      date: "1 Nov, 12:20 PM",
      status: "Paid",
      customer: "Teresa Janovsky",
      product: "Bracelet Onu-Lino",
      revenue: 27800,
    },
    {
      id: "10425",
      date: "1 Nov, 1:40 PM",
      status: "Canceled",
      customer: "Laur Gilbert",
      product: "Adidas Sweeze",
      revenue: 7604,
    },
    {
      id: "10426",
      date: "1 Nov, 2:19 PM",
      status: "Paid",
      customer: "Trista Goomes",
      product: "Backpack Niver",
      revenue: 67160,
    },
    {
      id: "10427",
      date: "1 Nov, 3:42 AM",
      status: "Paid",
      customer: "Riccardo Mosedill",
      product: "Adidas Vio",
      revenue: 16384,
    },
    {
      id: "10428",
      date: "2 Nov, 9:32 AM",
      status: "Paid",
      customer: "Whitaker Govini",
      product: "Airpods 2 Gen",
      revenue: 66547,
    },
    {
      id: "10429",
      date: "2 Nov, 10:14 AM",
      status: "Paid",
      customer: "Carolee Harwood",
      product: "Bracelet Warret",
      revenue: 91962,
    },
    {
      id: "10430",
      date: "2 Nov, 10:14 AM",
      status: "Refunded",
      customer: "Stephenie Isbell",
      product: "Water Bottle India x 3",
      revenue: 23542,
    },
    {
      id: "10431",
      date: "1 Nov, 10:20 AM",
      status: "Paid",
      customer: "Sebastian Koga",
      product: "Nike Sport V2",
      revenue: 23146,
    },
    {
      id: "10432",
      date: "1 Nov, 10:53 AM",
      status: "Paid",
      customer: "Iryna Innda",
      product: "Valvet T-shirt",
      revenue: 83133,
    },
    {
      id: "10433",
      date: "1 Nov, 11:13 AM",
      status: "Refunded",
      customer: "Arrias Liunda",
      product: "Nike Air Force",
      revenue: 48476,
    },
    {
      id: "10434",
      date: "1 Nov, 12:20 PM",
      status: "Paid",
      customer: "Teresa Janovsky",
      product: "Bracelet Onu-Lino",
      revenue: 27800,
    },
    {
      id: "10435",
      date: "1 Nov, 1:40 PM",
      status: "Canceled",
      customer: "Laur Gilbert",
      product: "Adidas Sweeze",
      revenue: 7604,
    },
    {
      id: "10436",
      date: "1 Nov, 2:19 PM",
      status: "Paid",
      customer: "Trista Goomes",
      product: "Backpack Niver",
      revenue: 67160,
    },
    {
      id: "10437",
      date: "1 Nov, 3:42 AM",
      status: "Paid",
      customer: "Riccardo Mosedill",
      product: "Adidas Vio",
      revenue: 16384,
    },
    {
      id: "10438",
      date: "2 Nov, 9:32 AM",
      status: "Paid",
      customer: "Whitaker Govini",
      product: "Airpods 2 Gen",
      revenue: 66547,
    },
    {
      id: "10439",
      date: "2 Nov, 10:14 AM",
      status: "Paid",
      customer: "Carolee Harwood",
      product: "Bracelet Warret",
      revenue: 91962,
    },
    {
      id: "10440",
      date: "2 Nov, 10:14 AM",
      status: "Refunded",
      customer: "Stephenie Isbell",
      product: "Water Bottle India x 3",
      revenue: 23542,
    },
  ];
  const [sortedRows, setSortedRows] = useState([...rows]);

  const tableHead = [
    { name: "id", label: "ID" },
    { name: "date", label: "Date" },
    { name: "status", label: "Status" },
    { name: "customer", label: "Customer" },
    { name: "product", label: "Product" },
    { name: "revenue", label: "Revenue" },
  ];
  useEffect(() => {
    handleSort(orderBy, order);
  }, []);

  const handleSort = (column, direction) => {
    const isAsc = order === "asc";
    const sorted = [...rows].sort((a, b) => {
      if (a[column] < b[column]) {
        return isAsc ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });

    setSortedRows(sorted);
    setOrder(direction);
    setOrderBy(column);
  };

  const handleSortRequest = (column) => {
    const isAsc = orderBy === column && order === "asc";
    handleSort(column, isAsc ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case "Paid":
        return <CheckCircle style={{ color: "green" }} />;
      case "Canceled":
        return <Cancel style={{ color: "red" }} />;
      case "Refunded":
        return <Autorenew style={{ color: "grey" }} />;
      default:
        return null;
    }
  };

  return (
    <Paper
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px",
        borderRadius: "15px",
      }}
    >
      <TableContainer sx={{ mt: 12 }}>
        <Box sx={{ m: 2, display: "flex", justifyContent: "end" }}>
          <input
            type="text"
            placeholder="Search..."
            // value={searchQuery}
            // onChange={handleSearchChange}
            style={{ padding: "8px", fontSize: "16px" }}
          />
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              {tableHead.map((cell) => (
                <TableCell key={cell.name}>
                  <TableSortLabel
                    active={orderBy === cell.name}
                    direction={orderBy === cell.name ? order : "asc"}
                    onClick={() => handleSortRequest(cell.name)}
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
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{renderStatusIcon(row.status)}</TableCell>
                  <TableCell>
                    <Box
                      sx={{ display: "flex", gap: "4px", alignItems: "center" }}
                    >
                      <Avatar>{row.customer[0]}</Avatar>
                      {row.customer}
                    </Box>
                  </TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{`$${row.revenue.toLocaleString()}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Typography>
          Showing {page * rowsPerPage + 1} to{" "}
          {Math.min((page + 1) * rowsPerPage, rows.length)} of {rows.length}{" "}
          entries
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {page !== 0 && (
            <IconButton
              sx={{ border: "1px solid grey", p: 1 }}
              onClick={(e) => handleChangePage(e, page - 1)}
              disabled={page === 0}
            >
              <KeyboardArrowLeft />
            </IconButton>
          )}
          <Box sx={{ display: "flex", gap: "5px" }}>
            {[...Array(Math.ceil(rows.length / rowsPerPage)).keys()].map(
              (pageNum) => (
                <div
                  style={{
                    border: "1px solid grey",
                    p: 1,
                    borderRadius: "50%",
                    minWidth: "40px",
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundColor: page === pageNum ? Colors.primary : "",
                    color: page === pageNum ? Colors.white : Colors.black,
                  }}
                  key={pageNum}
                  onClick={(e) => handleChangePage(e, pageNum)}
                >
                  {pageNum + 1}
                </div>
              )
            )}
          </Box>
          {page !== Math.ceil(rows.length / rowsPerPage) - 1 && (
            <IconButton
              sx={{ border: "1px solid grey", p: 1 }}
              onClick={(e) => handleChangePage(e, page + 1)}
              disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
            >
              <KeyboardArrowRight />
            </IconButton>
          )}
        </Box>
      </div>
    </Paper>
  );
};

export default OrderTable;
