import Home from "../../views/web/Home";
import Login from "../../views/web/Login";
import Register from "../../views/web/Register";

const PublicRoutes = [
  {
    path: "/home",
    component: <Home />
  },
  {
    path: "/login",
    component: <Login />
  },
  {
    path: "/register",
    component: <Register />
  },
]

export default PublicRoutes;