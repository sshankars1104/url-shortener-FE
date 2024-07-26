import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import URL from "../urls"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL.REGISTER, {
        email,
        firstName,
        lastName,
        password,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigate("/login"); // Redirect to login page after successful registration
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  return (
    <div className="container  d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="text-center">Register</h2>
      <div className="row justify-content-center w-100">
        <div className="col-md-6 col-lg-4 col-lg-4 ">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
