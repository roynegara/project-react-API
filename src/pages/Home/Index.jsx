import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <p className="home-title">Project RBN. Website</p>        
          <h1 className="home-description-1">Excellent consulting services with an experienced team of experts.</h1>
          <button className="home-btn">
            <Link to="/register">Join Us</Link>
          </button>        
      </div>
    </Layout>
  );
};

export default Home;
