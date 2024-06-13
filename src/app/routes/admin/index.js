import Dashboard from "../../views/admin/dashboard";
import UsersList from "../../views/admin/users/index";
import OrderList from "../../views/admin/orders/index" ;
import Pages from "../../views/admin/pages";
import Login from "../../views/admin/Login/index";


const AdminRoutes = [
  {
    path: "/login",
    component: <Login />
  },
  {
    path: "/dashboard",
    component: <Dashboard />
  },
  {
    path: "/crm",
    component: <Dashboard />
  },
  {
    path: "/pages",
    component: <Pages />
  },
  {
    path: "/userslist",
    component: <UsersList />
  },
  {
    path: "/orderslist",
    component: <OrderList />
  },
];

export default AdminRoutes;