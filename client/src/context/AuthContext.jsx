import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//1.create the context
const AuthContext = createContext();

//2.We Need Provide to deliver:
export const AuthProvider = ({ children }) => {
    
  const [user, setUser] = useState(false);
  const navigate=useNavigate();
  const storetokenInLS = (serverToken) => {
    // console.log(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // Function to get the token from localStorage and make a request
  const makeAuthenticatedRequest = async () => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (!token) {
      console.log("No token found");
      navigate('/signin');
    }

    try {
      // Make the request with the token in the Authorization header
      const response = await axios.get(
        "http://localhost:5000/api/auth/validation",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response);
      if (response) {
        console.log(response);
        setUser(true);
      } else {
        console.log("Not a valid user");
        navigate("/signin");
      }
    } catch (error) {
      console.error(
        "Error making request:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Function to sign out
  const signOut = () => {
    localStorage.removeItem("token");
    setUser(false); // Clear user state
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, storetokenInLS, makeAuthenticatedRequest,signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
