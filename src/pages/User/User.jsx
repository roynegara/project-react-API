import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./user.css";
import API_URL from "../../Utils/API_LIST";

const User = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 3,
    total: 0,
    total_pages: 4, // Update total_pages menjadi 4
  });

  const getUsersData = () => {
    axios
      .get(API_URL.USER + `?page=${pagination.page}&per_page=${pagination.per_page}`)
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
        setPagination({
          ...pagination,
          total: res.data.total,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBack = () => {
    setPagination({
      ...pagination,
      page: pagination.page - 1,
    });
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      page: pagination.page + 1,
    });
  };

  const handlePage = (page) => {
    setPagination({
      ...pagination,
      page: page,
    });
  };

  useEffect(() => {
    getUsersData();
  }, [pagination.page]);

  console.log("data", pagination);

  return (
    <Layout>
      <div className="user">
        <h1 className="user-title">The Member User of This Website</h1>
        <div>
          <div className="user-content">
            {users.map((item, index) => (
              <div key={index}>
                <div className="user-card">
                  <h1>
                    {item.first_name} {item.last_name}
                  </h1>
                  <img className="avatar-user" src={item.avatar} alt={`${item.first_name} ${item.last_name}`} />
                </div>
                <div className="btn-detail">
                  <Link to={`/user/${item.id}`}>
                    <button>Detail</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-pagination">
            <button onClick={handleBack} disabled={pagination.page === 1}>
              Back
            </button>
            {Array.from({ length: pagination.total_pages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePage(page)}
                className={pagination.page === page ? "active" : ""}
                disabled={pagination.page === page}>
                {page}
              </button>
            ))}
            <button onClick={handleNext} disabled={pagination.page === pagination.total_pages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;

// import axios from "axios";
// import Layout from "../../components/Layout/Layout";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./user.css";
// import API_URL from "../../Utils/API_LIST";

// const User = () => {
//   const [users, setUsers] = useState([]);
//   const [pagination, setPagination] = useState({
//     page: 1,
//     per_page: 3,
//     total: 0,
//     total_pages: 4,
//   });

//   const [activePage, setActivePage] = useState(1);

//   const getUsersData = () => {
//     axios
//       // pindah ke API
//       .get(API_URL.USER + `?page=${pagination.page}`)
//       .then((res) => {
//         console.log(res);
//         setUsers(res.data.data);
//         setPagination({
//           page: res.data.page,
//           per_page: res.data.per_page,
//           total: res.data.total,
//           total_pages: res.data.total_pages,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const handleBack = () => {
//     setPagination({
//       ...pagination,
//       page: pagination.page - 1,
//     });
//   };

//   const handleNext = () => {
//     setPagination({
//       ...pagination,
//       page: pagination.page + 1,
//     });
//   };

//   const handlePage = (page) => {
//     setPagination({
//       ...pagination,
//       page: page,
//     });
//   };

//   useEffect(() => {
//     getUsersData();
//   }, []);

//   useEffect(() => {
//     getUsersData();
//   }, [pagination.page]);

//   console.log("data", pagination);

//   return (
//     <Layout>
//       {" "}
//       <div className="user">
//         <h1 className="user-title">The Member User of This Website</h1>
//         <div>
//           <div className="user-content">
//             {users.map((item, index) => (
//               <div key={index}>
//                 <div className="user-card">
//                   <h1>
//                     {item.first_name} {item.last_name}
//                   </h1>
//                   <img className="avatar-user" src={item.avatar} />
//                 </div>

//                 <div className="btn-detail">
//                   <Link to={`/user/${item.id}`}>
//                     <button>Detail</button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="btn-pagination">
//             <button onClick={handleBack} disabled={pagination.page === 1}>
//               Back
//             </button>

//             {Array.from({ length: pagination.total_pages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => handlePage(page)}
//                 className={pagination.page === page ? "active" : ""}
//                 disabled={pagination.page === page}>
//                 {page}
//               </button>
//             ))}

//             {/* {Array.from({ length: pagination.total_pages }, (_, i) => i + 1).map((page) => (
//               <button key={page} onClick={() => handlePage(page)} disabled={pagination.page === page}>
//                 {page}
//               </button>
//             ))} */}

//             {/* <button> {pagination.page}</button> */}

//             <button onClick={handleNext} disabled={pagination.page === pagination.total_pages}>
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default User;
