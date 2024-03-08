import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import UserDetail from "../pages/UserDetail";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user/:id",    
    element: (
      <ProtectedRoute>
        <UserDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user/id/edit",
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
