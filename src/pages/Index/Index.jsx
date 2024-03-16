import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import AlertLogin from "../../components/Alert/AlertLogin";
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
              Kami menawarkan layanan konsultasi yang unggul dengan tim ahli berpengalaman untuk membantu Anda mencapai
              tujuan bisnis Anda. Dengan pendekatan yang terarah dan solusi yang inovatif, kami memastikan kesuksesan
              proyek Anda. Kami berkomitmen untuk memberikan solusi terbaik untuk memenuhi kebutuhan Anda.
            </p>

            <Link className="btn-home" to="/register" onClick={() => (AlertLogin() ? "/register" : "")}>
              Join Us
            </Link>
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
