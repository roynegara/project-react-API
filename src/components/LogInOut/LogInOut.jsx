import { Link, useNavigate } from "react-router-dom";
import "./loginout.css";

const LogInOut = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
  console.log("access_token", token);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <div className="loginout">{token ? <a onClick={handleLogout}> Logout </a> : <Link to="/login"> Login </Link>}</div>
  );
};

export default LogInOut;
