import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    // Check if userData has user and token properties
    if (userData.user && userData.token) {
      setUser(userData.user);
      setToken(userData.token);
      axios.defaults.headers.common["x-auth-token"] = userData.token; // Set token for axios
      navigate("/user"); // Redirect to user's personal page
    } else {
      console.error("Invalid user data:", userData);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    delete axios.defaults.headers.common["x-auth-token"]; // Remove token
    navigate("/login"); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
