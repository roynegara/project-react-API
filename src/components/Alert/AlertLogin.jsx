import { Navigate} from "react-router-dom";

const AlertLogin = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    alert("You are Already Login, Please Logout First !!!");
    return <Navigate to="/" />;
  }
}

export default AlertLogin



