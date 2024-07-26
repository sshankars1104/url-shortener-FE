import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import URL from "../urls"; 

const ResetPassword = () => {
  const { token } = useParams(); // Retrieve the token from the URL
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${URL.RESET_PASSWORD}/${token}`, { password });
      setMessage("Password reset successful");
      
    } catch (error) {
      setMessage("Error resetting password");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default ResetPassword;
