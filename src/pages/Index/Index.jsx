import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="home-part">
          <div className="home-content">
            <h1>Excellent consulting services with an experienced team of experts.</h1>
            <h3>Project RBN. Website</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi deserunt dicta nesciunt
              reprehenderit ullam repudiandae fugiat modi numquam pariatur. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nihil sequi deserunt dicta nesciunt reprehenderit ullam.
            </p>

            <Link className="btn-home" to="/register">
              Join Us
            </Link>

            <Link to="/login">Login</Link>
          </div>

          <div className="img-home">
            <img src="src/assets/img/Index/Index.png" alt="Index Image" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
