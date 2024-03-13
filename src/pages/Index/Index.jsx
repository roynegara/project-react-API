import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "./index.css";
import NotifHandlerWarning from "../../components/Notifications/NotifHandlerWarning";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="home-content">
          <p>Project RBN. Website</p>

          <NotifHandlerWarning />

         


          
         

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
