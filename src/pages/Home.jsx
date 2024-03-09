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
            Perusahaan kami menawarkan layanan konsultasi yang unggul dengan tim ahli yang berpengalaman dalam Project
            RBN. Dengan pendekatan profesional dan solusi yang inovatif, kami siap membantu pelanggan mencapai tujuan
            mereka. Bergabunglah dengan kami untuk memperoleh hasil yang optimal dalam bisnis Anda
          </p>
          <div className="home-description-2">
            {" "}
            <p>If you interesting join please Register here</p>
            <button className="home-btn">
              <Link to="/register">Register</Link>
            </button>
            <p>and if you already registered just login here</p>
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
