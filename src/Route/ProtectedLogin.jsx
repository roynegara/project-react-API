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

const ProtectedLogin = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    alert(alertHandler.alertProtectedLogin());
    return <Navigate to="/" />;
  } else {
    return children || <Outlet />;
  }
};

export default ProtectedLogin;
