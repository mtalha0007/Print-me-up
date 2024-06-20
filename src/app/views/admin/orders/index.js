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
  InputLabel,
  TextField,
  Grid,
  MenuItem,
  Button,
} from "@mui/material";
import { CheckCircle, Cancel, Autorenew } from "@mui/icons-material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Colors from "../../../assets/styles";
import orderServices from "../../../api/orderServices/order.index";
import Loader from "../../../components/Loader";
import { useForm } from "react-hook-form";
import SimpleDialog from "../../../components/Dialog";
import OrderServices from "../../../api/orderServices/order.index";
import { ErrorHandler } from "../../../utils/ErrorHandler";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import moment from "moment/moment";

const OrderTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderOutput, setOrderOutput] = useState([]);
  const [orderBy, setOrderBy] = useState("created_at");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedRows, setSortedRows] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectStatus, setSelectStatus] = useState();
  const [selectedUser, setSelectedUser] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log(baseUrl);
  const tableHead = [
    { name: "order_no", label: "Order Id" },
    { name: "created_at", label: "Created At" },
    { name: "customer", label: "Customer Name" },
    { name: "status", label: "Status" },
    { name: "payment_status", label: "Payment Status" },
    { name: "address", label: "Address" },
    { name: "details", label: "Details" },
    { name: "screenShot", label: "ScreenShot" },
    // { name: "backScreenShot", label: "Back ScreenShot" },
    { name: "action", label: "Action" },
  ];

  useEffect(() => {
    handleGetOrders();
  }, []);

  useEffect(() => {
    handleSort(orderBy, order);
  }, [orderOutput]);

  const handleGetOrders = async () => {
    setLoading(true);
    try {
      const { data, responseCode, message } = await orderServices.getOrders();
      console.log(data.orders);
      setOrderOutput(data.orders);
      setLoading(false);
   
    } catch (error) {
      console.error("Error while fetching users:", error);
    }
  };

  const handleSort = (column, direction) => {
    const isAsc = direction === "desc";
    const sorted = [...orderOutput].sort((a, b) => {
      let aValue = a[column];
      let bValue = b[column];

      // Handle nested properties
      if (column === "customer") {
        aValue = `${a.customer.first_name} ${a.customer.last_name}`;
        bValue = `${b.customer.first_name} ${b.customer.last_name}`;
      } else if (column === "details") {
        aValue = a.details
          .map((detail) => `${detail.size} ${detail.qty} ${detail.design}`)
          .join(", ");
        bValue = b.details
          .map((detail) => `${detail.size} ${detail.qty} ${detail.design}`)
          .join(", ");
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
  useEffect(() => {
    if (selectedUser) {
      console.log(selectedUser);
      setValue("status", selectedUser.status);
      setSelectStatus(selectedUser.status);
    }
  }, [openDialog, selectedUser, setValue]);

  const handleStatusChange = (event) => {
    setSelectStatus(event.target.value);
    setValue("status", event.target.value);
  };
  const handleOpenDialog = (orderDetail) => {
    console.log(orderDetail);
    setOpenDialog(true);
    setSelectStatus(orderDetail.status);
    setSelectedUser(orderDetail);
  };

  const updateStatus = async (formData) => {
    let obj = {
      order_id: selectedUser?._id,
      status: formData?.status,
    };
    console.log(obj);
    try {
      const data = await OrderServices.updateStatus(obj);
      setLoading(true);
      SuccessToaster(data.message);
      setOpenDialog(false);
      handleGetOrders();
    } catch (error) {
      ErrorHandler(error);
      ErrorToaster(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
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
              {loading ? (
                <TableRow>
                  <TableCell colSpan={tableHead.length}>
                    <Loader width="40px" height="40px" />
                  </TableCell>
                </TableRow>
              ) : (
                sortedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row._id}>
                     
                      <TableCell>{row.order_no}</TableCell>
                      <TableCell>{moment(row.created_at).format("DD-MM-YYYY")}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            gap: "4px",
                            alignItems: "center",
                          }}
                        >
                          <Avatar>{row.customer.first_name.charAt(0)}</Avatar>
                          {`${row.customer.first_name} ${row.customer.last_name}`}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography
                          onClick={() => handleOpenDialog(row)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "13px",
                            cursor: "pointer",
                          }}
                        >
                          {/* {renderStatusIcon(row.status)} */}
                          {row.status}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Typography
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "13px",
                          }}
                        >
                          {/* {renderStatusIcon(row.payment_status)} */}
                          {row.payment_status}
                        </Typography>
                      </TableCell>

                      <TableCell>
                        <Box>{`${row.address.address_1} - ${row.address.address_2}`}</Box>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ width: "100px", fontSize: "13px" }}>
                          {/* {`${row.details[0].size} - ${row.details[0].qty} - ${row.details[0].design}`} */}
                        </Typography>
                        {row.details.map((detail, index) => (
                          <Box
                            key={index}
                          >{`${detail.size} - ${detail.qty}`}</Box>
                        ))}
                      </TableCell>
                      <TableCell>
                        <img
                         
                        onClick={()=>{
                          if(row.screenshot_front){
                          const fileUrl = baseUrl + row.screenshot_front;
                            window.open(fileUrl, '_blank');
                          }
                        }}
                          style={{ width: "100px",cursor:"pointer" }}
                          src={baseUrl + row.screenshot_front}
                        />
                      </TableCell>
                        <TableCell>
                      {row.details[0].design_front ? (

                        <InsertDriveFileIcon
                        onClick={() => {
                          const fileUrl = baseUrl + row.details[0].design_front;
                          window.open(fileUrl, '_blank');
                        }}
                        sx={{ color: Colors.primary, cursor: "pointer" }}
                        />
                      ):"-"}
                        </TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
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
              {[
                ...Array(Math.ceil(orderOutput.length / rowsPerPage)).keys(),
              ].map((pageNum) => (
                <Box
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
                </Box>
              ))}
            </Box>
            {page !== Math.ceil(orderOutput.length / rowsPerPage) - 1 && (
              <IconButton
                sx={{ border: "1px solid grey", p: 1 }}
                onClick={(e) => handleChangePage(e, page + 1)}
                disabled={
                  page >= Math.ceil(orderOutput.length / rowsPerPage) - 1
                }
              >
                <KeyboardArrowRight />
              </IconButton>
            )}
          </Box>
        </Box>
      </Paper>
      <SimpleDialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
        title="Update Status"
        selectedUser={selectedUser}
      >
        <Box component={"form"} onSubmit={handleSubmit(updateStatus)}>
          <Grid sx={{ mt: 2 }} container spacing={2} alignItems="center">
            {/* status */}
            <Grid item xs={12} sm={12} sx={{ width: "100%" }}>
              <InputLabel>Status</InputLabel>
              <TextField
                fullWidth
                select
                {...register("status")}
                value={selectStatus}
                onChange={handleStatusChange}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="confirmed">Confirmed</MenuItem>
                <MenuItem value="processing">Processing</MenuItem>
                <MenuItem value="delivered">Delivered</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </TextField>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                sx={{
                  background: Colors.primary,
                  color: Colors.white,
                  padding: "5px 25px",
                  "&:hover": {
                    background: Colors.primary,
                  },
                }}
              >
                UPDATE
              </Button>
            </Grid>
          </Grid>
        </Box>
      </SimpleDialog>
    </>
  );
};

export default OrderTable;
