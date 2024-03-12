import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "./index.css";
import alertHandler from "../../components/alertHandler";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="home-content">
          <p>Project RBN. Website</p>
          <button
            onClick={() => {
              alertHandler.alertProtectedLogin();
            }}>
            Alert
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>

          <h1>Excellent consulting services with an experienced team of experts.</h1>
          <button>
            <Link to="/register">Join Us</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
