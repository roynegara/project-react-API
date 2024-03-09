import Layout from "../components/Layout";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  console.log("access_token", token);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <Layout>
      <div className="home">
        <h1 className="home-title">Welcome to Project RBN. Website</h1>
        <div className="home-content">
          <p className="home-description-1">
            Our company offers excellent consulting services with an experienced team of experts in Project RBN. With a
            professional approach and innovative solutions. We are ready to assist customers in achieving their goals.
            Join us to obtain optimal results for your business.
          </p>
          <div className="home-description-2">
            {" "}
            <p>If you are interested in joining, please register here.</p>
            <button className="home-btn">
              <Link to="/register">Register</Link>
            </button>
            <p>And if you have already registered, please log in here.</p>
            {token ? (
              <button className="home-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="home-btn">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
