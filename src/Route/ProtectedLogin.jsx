import { Navigate } from "react-router-dom";
import alertHandler from "../components/alertHandler";

export const ProtectedLogin = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    alert(alertHandler.alertProtectedLogin());
    return <Navigate to="/" />;
  }
  // Jika tidak ada token, maka program akan melanjutkan eksekusi tanpa memberikan tindakan tambahan jika token tidak ada.
};
