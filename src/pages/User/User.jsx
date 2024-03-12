import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./user.css";

const User = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    per_page: 0,
    total: 0,
    total_pages: 0,
  });

  const [activePage, setActivePage] = useState(1);

  const getUsersData = () => {
    axios
      // pindah ke API
      .get(`https://reqres.in/api/users?page=${pagination.page}`)
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);
        setPagination({
          page: res.data.page,
          per_page: res.data.per_page,
          total: res.data.total,
          total_pages: res.data.total_pages,
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
  }, []);

  useEffect(() => {
    getUsersData();
  }, [pagination.page]);

  console.log("data", pagination);

  return (
    <Layout>
      {" "}
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
                  <img className="avatar-user" src={item.avatar} />
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
            <button> {pagination.page}</button>

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