import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailReg = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordReg = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleReg = () => {
    const payload = {
      email: email,
      password: password,
    };

    // Jika eror
    setLoading(true);

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        console.log(res);
        setNotif("Status : " + res?.status + " >> Register Successfully, Please Login");
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        setLoading(false);
        if (token) {
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      })
      .catch((err) => {
        // alert("Warning !!! " + err?.response?.data?.error + ", Please Check Again Your Email or Password");
        setLoading(false);
        console.log(err.response);
        setNotif("Warning !!! " + err?.response?.data?.error + ", Please Check Again Your Email or Password");
      });
  };

  return (
    <Layout>
      <div className="register-wrap">
        <div className="register">
          <h1> Register</h1>
          {notif && <div className="notif">{notif}</div>}
          <div className="input-box-reg">
            <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailReg} />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box-reg">
            <input type="password" id="password" placeholder="Password" onChange={handlePasswordReg} />
            <i className="bx bxs-lock-open"></i>
          </div>

          <div className="btn-reg">
            <button
              type="submit"
              onClick={handleReg}
              disabled={loading ? true : false}>              
              {loading ? "Loading..." : "Register"}
            </button>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
