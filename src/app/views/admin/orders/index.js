import React, { useEffect, useState } from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { CheckCircle, Cancel, Autorenew } from "@mui/icons-material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Colors from "../../../assets/styles";
import orderServices from "../../../api/orderServices/order.index";

const OrderTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderOutput, setOrderOutput] = useState([]);
  const [orderBy, setOrderBy] = useState("created_at");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedRows, setSortedRows] = useState([]);

  const tableHead = [
    { name: "order_no", label: "Order Id" },
    { name: "created_at", label: "Created At" },
    { name: "status", label: "Status" },
    { name: "payment_status", label: "Payment Status" },
    { name: "customer", label: "Customer Name" },
    { name: "details", label: "Details" },
  ];

  useEffect(() => {
    handleGetOrders();
  }, []);

  useEffect(() => {
    handleSort(orderBy, order);
  }, [orderOutput]);

  const handleGetOrders = async () => {
    try {
      const { data, responseCode, message } = await orderServices.getOrders();
      console.log(data.orders);
      setOrderOutput(data.orders);
    } catch (error) {
      console.error("Error while fetching users:", error);
    }
  };

  const handleSort = (column, direction) => {
    const isAsc = direction === "asc";
    const sorted = [...orderOutput].sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];

      // Handle nested properties
      if (column === "customer") {
        aValue = `${a.customer.first_name} ${a.customer.last_name}`;
        bValue = `${b.customer.first_name} ${b.customer.last_name}`;
      } else if (column === "details") {
        aValue = a.details.map(detail => `${detail.size} ${detail.qty} ${detail.design}`).join(", ");
        bValue = b.details.map(detail => `${detail.size} ${detail.qty} ${detail.design}`).join(", ");
      }

      if (aValue < bValue) {
        return isAsc ? -1 : 1;
      }
      if (aValue > bValue) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });

    console.log(direction);
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
      case "pending":
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
            {console.log(sortedRows)}
            {sortedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.order_no}</TableCell>
                  <TableCell>{row.created_at}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  {/* <TableCell>{renderStatusIcon(row.status)}</TableCell> */}
                  <TableCell>{row.payment_status}</TableCell>
                  <TableCell>
                    <Box
                      sx={{ display: "flex", gap: "4px", alignItems: "center" }}
                    >
                      <Avatar>{row.customer.first_name.charAt(0)}</Avatar>
                      {`${row.customer.first_name} ${row.customer.last_name}`}
                    </Box>
                  </TableCell>
                  <TableCell>
                    {row.details.map((detail, index) => (
                      <div key={index}>{`${detail.size} - ${detail.qty} - ${detail.design}`}</div>
                    ))}
                  </TableCell>
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
          {Math.min((page + 1) * rowsPerPage, orderOutput.length)} of{" "}
          {orderOutput.length} entries
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
            {[...Array(Math.ceil(orderOutput.length / rowsPerPage)).keys()].map(
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
          {page !== Math.ceil(orderOutput.length / rowsPerPage) - 1 && (
            <IconButton
              sx={{ border: "1px solid grey", p: 1 }}
              onClick={(e) => handleChangePage(e, page + 1)}
              disabled={page >= Math.ceil(orderOutput.length / rowsPerPage) - 1}
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
