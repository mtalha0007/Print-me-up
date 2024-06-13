// LoginForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  CardMedia,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthServices from "../../../api/AuthServices/auth.index";
import { useNavigate } from "react-router-dom";
import images from "../../../assets/images/index";
import {
  ErrorToaster,
  SuccessToaster,
} from "../../../components/Toaster/index";
import { ErrorHandler } from "../../../utils/ErrorHandler";
import Images from "../../../assets/images/index";
import { useAuth } from "../../../context/index";


const theme = createTheme();

function LoginForm() {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (formData) => {
    setLoading(true);
    try {
      let obj = {
        email: formData.email,
        password: formData.password,
      };
      const { status, responseCode, data, message } = await AuthServices.login(
        obj
      );

      SuccessToaster(message);
      userLogin(data)
      navigate("/dashboard");
    } catch (error) {
      ErrorHandler(error);
      ErrorToaster(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Container component="main" maxWidth="lg" sx={{ height: "100vh" }}> */}
      <CssBaseline />
      <Grid container sx={{ height: "100vh" }}>
      <Box
            sx={{
              backgroundImage: {xs:`url(${images.productDesign})`,md:"none"},
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              display:"flex"
            }}
          >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            //   p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              borderRadius: "10px",
              background:{xs:"white",md:"none"},

              p: 4,
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontWeight: "bold", color: "#36D1DC" }}
            >
              Welcome Back
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{ color: "#b0bec5", mb: 2 }}
            >
              Enter your email and password to sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(login)} sx={{ mt: 1 }}>
              <TextField
                {...register("email", { required: "Email is required" })}
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <TextField
                {...register("password", { required: "Password is required" })}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#36D1DC", color: "#fff" }}
              >
                SIGN IN
              </Button>
            </Box>
          </Box>
        </Grid>
       
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            width: "100%",
            display:{xs:"none",md:"flex"}
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${images.productDesign})`,
              height: "100%",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
      </Box>
      </Grid>
      {/* </Container> */}
    </ThemeProvider>
  );
}

export default LoginForm;
