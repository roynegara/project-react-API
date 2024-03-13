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

// **tgl 13/12/2022 jam 10.47 **
import { Navigate, Outlet } from "react-router-dom";
// import alertHandler from "../components/alertHandler";
import AlertLogin from "../components/Alert/AlertLogin";

const ProtectedLogin = ({ children }) => {
  const token = localStorage.getItem("access_token");
  // const url = window.location.pathname;
  // console.log("url_link", url);

  if (token) {
    <AlertLogin/>;
    return <Navigate to="/" />;
  } else {
    return children || <Outlet />;
  }
};
// **tgl 13/12/2022 jam 10.47 **

// const ProtectedLogin = ({ children }) => {
//   const token = localStorage.getItem("access_token");
//   if (token) {
//     // alert(alertHandler.alertProtectedLogin());
//     <ErrorNotification />;
//     return <Navigate to="/" />;
//   } else {
//     return children || <Outlet />;
//   }
// };

export default ProtectedLogin;
