import { Fragment } from "react";
import Colors from "./app/assets/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Layout from "./app/layout/web/index";
import DashboardLayout from "./app/layout/dashboard";
import PublicRoutes from "./app/routes/public";
import AdminRoutes from "./app/routes/admin";
import "@fontsource/noto-sans";
import Home from "./app/views/web/Home";
import Login from "./app/views/admin/Login/index";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif",
    h1: {
      fontSize: "72px",
    },
    h2: {
      fontSize: "60px",
    },
    h3: {
      fontSize: "48px",
    },
    h4: {
      fontSize: "36px",
    },
    h5: {
      fontSize: "24px",
    },
    h6: {
      fontSize: "18px",
    },
    subtitle1: {
      fontSize: "16px",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "12px",
    },
  },
  palette: {
    primary: {
      main: Colors.primary
    }
  }
})

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
          <Route
              path="/"
              element={<Navigate to={"/login"} replace={true} />}
            />
            <Route path="/login" element={<Login />} />

            {/* <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              {PublicRoutes.map((item, i) => (
                <Route key={i} path={item.path} element={item.component} />
              ))}
            </Route> */}
            <Route path="/" element={<DashboardLayout />}>
              {AdminRoutes.map((item, i) => (
                <Route key={i} path={item.path} element={item.component} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Fragment >
  );
}

export default App;
