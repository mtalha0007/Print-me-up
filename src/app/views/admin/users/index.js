import React, { useState, useEffect } from "react";
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
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { CheckCircle, Cancel, Autorenew } from "@mui/icons-material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Colors from "../../../assets/styles";

// Sample data
const rows = [
  {
    id: "42312",
    name: "Esthera Jackson",
    function: "Manager",
    review: "Positive",
    email: "esthera@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "93201",
    name: "Alexa Liras",
    function: "Programmer",
    review: "Positive",
    email: "alexa@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "84120",
    name: "Laurent Michael",
    function: "Executive",
    review: "Neutral",
    email: "laurent@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42314",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42315",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42316",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42317",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42318",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42319",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42320",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
  {
    id: "42321",
    name: "Freduardo Hill",
    function: "Manager",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
  },
];

const tableHead = [
  { name: "id", label: "ID" },
  { name: "name", label: "Name" },
  { name: "designation", label: "Designation" },
  { name: "review", label: "Review" },
  { name: "email", label: "Email" },
  { name: "employed", label: "Employed" },
];

const UserTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedRows, setSortedRows] = useState([...rows]);

  useEffect(() => {
    handleSort(orderBy, order);
  }, [orderBy, order]);

  const handleSort = (column, direction) => {
    const isAsc = direction === "asc";
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

  const renderReview = (review) => {
    switch (review) {
      case "Positive":
        return <CheckCircle style={{ color: "green" }} />;
      case "Neutral":
        return <Autorenew style={{ color: "grey" }} />;
      case "Negative":
        return <Cancel style={{ color: "red" }} />;
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
      {/* <Box sx={{ m: 2, display: "flex", justifyContent: "end" }}>
          <input
            type="text"
            placeholder="Search..."
            // value={searchQuery}
            // onChange={handleSearchChange}
            style={{ padding: "8px", fontSize: "16px" }}
          />
        </Box> */}
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
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
                      <Avatar src={`/path/to/avatars/${row.name}.jpg`} /> {/* Replace with actual path */}
                      {row.name}
                    </Box>
                  </TableCell>
                  <TableCell>{row.function}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {renderReview(row.review)}
                      <Typography sx={{ ml: 1 }}>{row.review}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.employed}</TableCell>
                
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

export default UserTable;
