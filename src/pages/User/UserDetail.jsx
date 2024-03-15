import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./userDetail.css";
import API_URL from "../../Utils/API_LIST";

const UserDetail = () => {
  const [user, setUser] = useState([]);
 

  const getUserData = () => {
    axios
      .get(API_URL.USER + `/${id}`)
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
      <div className="user-detail">
        <h1 className="user-detail-title">Detail of The User This Website </h1>
        <div className="user-detail-content">
          <div className="user-detail-card">
            <h1>First Name : {user?.first_name}</h1>
            <h1>Last Name : {user?.last_name}</h1>
            <h2>Email Address : {user?.email}</h2>
            <img className="avatar-user-detail" alt={user?.first_name} src={user?.avatar} />
          </div>

          <Link className="btn-userdetail-back" to="/user">
            Back
          </Link>

          <Link className="btn-userdetail-edit" to={`/user/${id}/edit`}>
            Edit
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetail;
