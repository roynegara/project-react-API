import axios from "axios";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./User.css";

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

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <Layout>
      {" "}
      <div className="user">
        <h1>User</h1>
        <div>
          {users.map((item, index) => (
            <div key={index}>
                  <h1>{item.first_name} {item.last_name}</h1>
                  <img src={item.avatar} />

              <div>
                <Link to={`/user/${item.id}`}>
                  <button>Detail</button>
                </Link>
              </div>
            </div>
          ))}
          <div>
            <button>Back</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
