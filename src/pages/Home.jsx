import Layout from "../components/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
          <div className="home">
              <h1>Selamat datang di halaman Home</h1>
              <p>Ini adalah halaman Home</p>
              <p>Halaman ini akan ditampilkan ketika user mengakses halaman Home</p>
              <p>Silakan Login terlebih dahulu jika mau mengakses user</p>
              
      </div>
    </Layout>
  );
};

export default Home;
