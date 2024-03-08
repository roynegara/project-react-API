import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const UserDetail = () => {
  const [user, setUser] = useState([]);

  const getUserData = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const { id } = useParams();
  console.log(id);

  return (
    <Layout>
      <div>
        <h1>User Detail</h1>
        <div>
          <h1>{user?.first_name}</h1>
          <h1>{user?.last_name}</h1>
          <h2>{user?.email}</h2>
          <img alt={user?.first_name} src={user?.avatar} />
          <div>
            <button>
              <Link to="/user">Back</Link>
            </button>
            <button>
              <Link to={`/user/${id}/edit`}>Edit</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetail;
