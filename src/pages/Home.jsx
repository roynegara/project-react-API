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
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button>
            <Link to="/login">Login</Link>
          </button>
        )}
        <h1>Selamat datang di halaman Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
