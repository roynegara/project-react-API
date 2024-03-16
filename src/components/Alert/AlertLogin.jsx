import { Navigate } from "react-router-dom";

const AlertLogin = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    alert("Warning !!! You are Already Logged In or Registered");
    return <Navigate to="/" />;
  }
};

export default AlertLogin;
