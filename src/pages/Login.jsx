import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "./Login.css";

const Login = () => {
  return (
    <Layout>
      <div className="login-wrap">
        <div className="login">
          <h1>Login</h1>
          <div className="input-box-login">
            <input type="email" id="email" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box-login">
            <input type="password" id="password" placeholder="Password" />
            <i className='bx bxs-lock-open'></i>
          </div>
          <div className="btn-login">
            <button>Login</button>
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
