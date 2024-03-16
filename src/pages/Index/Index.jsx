import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
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

            <Link className="btn-home" to="/register" onClick={()=> AlertLogin()? "/register" : ""}>
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

// import React, { useState, useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import { Link } from "react-router-dom";
// import "./index.css";

// const Home = () => {
//   const [notif, setNotif] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("access_token");

//     if (token) {
//       setNotif("Status : Please Logout First !!!");
//     } else {
//       setNotif("Status : Please Login First !!!");
//     }
//   }, []);

//   return (
//     <Layout>
//       <div className="home">
//         <div className="home-part">
//           <div className="home-content">
//             <h1>Excellent consulting services with an experienced team of experts.</h1>
//             <h3>Project RBN. Website</h3>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi deserunt dicta nesciunt
//               reprehenderit ullam repudiandae fugiat modi numquam pariatur. Lorem ipsum dolor sit, amet consectetur
//               adipisicing elit. Nihil sequi deserunt dicta nesciunt reprehenderit ullam.
//             </p>

//             {notif && <div className="notif">{notif}</div>}
//             <Link className="btn-home" to="/register">
//               Join Us
//             </Link>
//           </div>

//           <div className="img-home">
//             <img src="src/assets/img/Index/Index.png" alt="Index Image" />
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;

// import Layout from "../../components/Layout/Layout";
// import { Link } from "react-router-dom";
// import "./index.css";
// // import Notif from "../../components/Notifications/NotifHandlerWarning";

// const Home = () => {
//   return (
//     <Layout>
//       <div className="home">
//         <div className="home-part">
//           <div className="home-content">
//             <h1>Excellent consulting services with an experienced team of experts.</h1>
//             <h3>Project RBN. Website</h3>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sequi deserunt dicta nesciunt
//               reprehenderit ullam repudiandae fugiat modi numquam pariatur. Lorem ipsum dolor sit, amet consectetur
//               adipisicing elit. Nihil sequi deserunt dicta nesciunt reprehenderit ullam.
//             </p>

//             <Link className="btn-home" to="/register">
//               Join Us
//             </Link>
//           </div>

//           <div className="img-home">
//             <img src="src/assets/img/Index/Index.png" alt="Index Image" />
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Home;
