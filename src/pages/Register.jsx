import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Register.css";
const Register = () => {
  return (
    <Layout>
      <div className="register-wrap">
        <div className="register">
          <h1> Register</h1>
          <div className="input-box-reg">
            <input type="email" id="email" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box-reg">
            <input type="password" id="password" placeholder="Password" />
            <i className="bx bxs-lock-open"></i>
          </div>

          <div className="btn-reg">
            <button>Register</button>
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
