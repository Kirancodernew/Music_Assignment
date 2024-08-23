import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
  const {storetokenInLS,setUser}=useAuth();
  const navigate=useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', userData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Status", response.status);
      if (response.status === 200) {
        alert("Login Successful");
        storetokenInLS(response.data.token);
        setUser(true);
        navigate("/songs");
      } else {
        alert("Invalid credentials");
        console.log("Invalid credentials");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.Message || error.message;
      alert(`Error: ${errorMessage}`);
      console.error('Error:', errorMessage);
    }
  };
  

  return (
    <div className="min-h-[75vh] w-full flex justify-center items-center">
      <div className="max-w-[470px] bg-blue-200 rounded max-h-[500px] p-6">
        <form method="POST" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center pb-5">Sign In</h1>
          <div>
            <label className="text-lg px-1" htmlFor="email">
              Email:
            </label>
            <input
              className="border border-gray-300 w-full rounded p-2 focus:outline-blue-500"
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="my-4">
            <label className="text-lg px-1" htmlFor="password">
              Password:
            </label>
            <input
              className="border border-gray-300 w-full rounded p-2 focus:outline-blue-500"
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleOnChange}
              required
            />

          </div>
          <div className="my-4">
            <input type="checkbox" name="remember" className="mx-2 " />
            <label htmlFor="remember" className="text-gray-700">Remember me</label>
          </div>
          <button className="text-white bg-gradient-to-r from-blue-600 to-blue-400 font-medium rounded-lg px-5 py-2.5 w-full mb-10" type="submit">
            Log In
          </button>
          <div className="text-center">
            <p className="text-gray-700">
              Don't have an account? <a href="/signup" className="text-blue-800 font-bold text-lg">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
