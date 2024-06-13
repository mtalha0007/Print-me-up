import { Home, Description, Circle, Equalizer, ShoppingCart, Person, InsertDriveFile } from '@mui/icons-material';

const Navigation = [
  {
    name: "Dashboard",
    icon: <Home />,
    path:"/dashboard"
    // subMenu: [
    //   {
    //     name: "Default",
    //     path: "/default",
    //     icon: <Circle />
    //   },
    //   {
    //     name: "CRM",
    //     path: "/crm",
    //     icon: <Circle />
    //   },
    // ]
  },
  {
    name: "Hardcoded",
    text: "Pages",
  },
  // {
  //   name: "Pages",
  //   icon: <InsertDriveFile />,
  //   subMenu: [
  //     {
  //       name: "Profile",
  //       icon: <Circle />,
  //       path: "/profile"
  //     },
  //     {
  //       name: "Users",
  //       icon: <Circle />,
  //       path: "/users"
  //     },
  //     {
  //       name: "Account",
  //       icon: <Circle />,
  //       path: "/account"
  //     },
  //   ]
  // },
  {
    name: "Users",
    icon: <Person />,
    path:"/userslist",    
  },
  {
    name: "Orders",
    icon: <ShoppingCart />,
    path:"/orderslist",    
  },
  // {
  //   name: "Application",
  //   icon: <Equalizer />,
  //   subMenu: [
  //     {
  //       name: "Kanban",
  //       icon: <Circle />,
  //       path: "/kanban"
  //     },
  //     {
  //       name: "Wizard",
  //       icon: <Circle />,
  //       path: "/wizard"
  //     },
  //     {
  //       name: "Calendar",
  //       icon: <Circle />,
  //       path: "/calendar"
  //     },
  //   ]
  // },
  // {
  //   name: "Ecommerce",
  //   icon: <ShoppingCart />,
  //   subMenu: [
  //     {
  //       name: "Products",
  //       icon: <Circle />,
  //       path: "/products"
  //     },
  //     {
  //       name: "Others",
  //       icon: <Circle />,
  //       path: "/others"
  //     },
  //   ]
  // },
  // {
  //   name: "Authentication",
  //   icon: <Person />,
  //   subMenu: [
  //     {
  //       name: "Sign In",
  //       icon: <Circle />,
  //       path: "/signin"
  //     },
  //     {
  //       name: "Sign Up",
  //       icon: <Circle />,
  //       path: "/signup"
  //     },
  //   ]
  // },
];

export default Navigation;