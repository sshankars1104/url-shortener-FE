import React from "react";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 bg-dark">
      <h1 className="text-white-50 fs-1 fw-bold">
        Welcome To URL Shortener Application
      </h1>
      <Link to="/shorten-url" className="text-decoration-none">
        ➩ ➩ ➩ Click me to START Application
      </Link>
    </div>
  );
};

export default UserPage;
