// import { Navigate, Outlet } from "react-router-dom";
// import alertHandler from "../components/alertHandler";

// const ProtectedLogin = ({ children }) => {
//   const token = localStorage.getItem("access_token");
//   if (token) {
//     alert(alertHandler.alertProtectedLogin());
//     return <Navigate to="/" />;
//   } else {
//     return children || <Outlet />;
//   }
// };

// export default ProtectedLogin;

import { Navigate, Outlet } from "react-router-dom";
import alertHandler from "../components/alertHandler";
import { useEffect } from "react";

export const ProtectedLogin = ({ children }) => {
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    // Trigger the alert only once when the component mounts
    if (token) {
      alertHandler.alertProtectedLogin();
    }
  }, []); // Empty dependency array ensures the effect runs only once

  if (token) {
    return <Navigate to="/" />;
  } else {
    return children || <Outlet />;
  }
};
