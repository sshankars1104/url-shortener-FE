import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Welcome to Our URL Shortener Application</h1>
      <p className="lead text-center">
        Please use the navigation links below to access the authentication
        features:
      </p>
      <nav>
        <ul className="list-unstyled d-flex flex-column align-items-center">
          <li>
            <Link className="btn btn-primary m-2" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="btn btn-secondary m-2" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
