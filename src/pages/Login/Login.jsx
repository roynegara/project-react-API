import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../Utils/API_LIST";
import Layout from "../../components/Layout/Layout";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    // Jika eror
    setLoading(true);

    axios
      .post(API_URL.LOGIN, payload)
      .then((res) => {
        console.log(res);
        setNotif("Status : " + res?.status + " >> Login Successfully, Please Wait...");
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        setLoading(false);
        if (token) {
          setTimeout(() => {
            navigate("/user");
          }, 1500);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        setNotif("Warning !!! " + err?.response?.data?.error + ", Please Check Again Your Email or Password");
      });
  };

  return (
    <Layout>
      <div className="login-wrap">
        <div className="login">
          <h1>Login</h1>
          {notif && <div className="notif">{notif}</div>}
          <div className="input-box-login">
            <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box-login">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <i className="bx bxs-lock-open"></i>
          </div>
          <div className="btn-login">
            <button type="submit" onClick={handleLogin} disabled={loading ? true : false}>
              {loading ? "Loading..." : "Login"}
            </button>
            <div>
              <p>
                Not have an account? <Link to={"/register"}>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
