import Index from "../pages/Index/Index";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import User from "../pages/User/User";
import UserDetail from "../pages/User/UserDetail";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectedLogin";

export const routeList = [
  {
    path: "/",
    element: <Index />,
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
    path: "/login",
    element: (
      <ProtectedLogin>
        <Login />
      </ProtectedLogin>
    ),
  },

  {
    path: "/register",
    element: <Register />,
  },
];
