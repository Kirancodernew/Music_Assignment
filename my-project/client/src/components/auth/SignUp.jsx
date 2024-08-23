import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const SignUp = () => {

  const navigate=useNavigate();

  const { setUser } = useAuth();
  const [userData,setUserData]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  })

  

  const handleOnChange=(event)=>{
    const value=event.target.value;
    const name=event.target.name;
    setUserData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', userData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(res){
        console.log(res.data);
        navigate('/signin');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="min-h-[80vh] w-full flex justify-center items-center p-8 lg:py-8">
      <div className="max-w-[470px] bg-blue-200 rounded p-6">
        <form method="post" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center pb-5">Sign Up</h1>
          <div>
            <label className="text-lg px-1" htmlFor="name">
              Name:
            </label>
            <input
              className="border border-gray-300 w-full rounded p-2 focus:outline-blue-500"
              type="text"
              placeholder="name"
              name="name"
              value={userData.name}
              onChange={handleOnChange}
              required
            />
          </div>
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
            <label className="text-lg px-1" htmlFor="cpassword">
                Confirm Password:
            </label>
            <input
                className="border border-gray-300 w-full rounded p-2 focus:outline-blue-500"
                type="password"
                placeholder="Password"
                name="cpassword"
                value={userData.cpassword}
                onChange={handleOnChange}
                required
            />
          </div>
          <div className="my-4">
            <input type="checkbox" name="remember" className="mx-2 " />
            <label htmlFor="remember" className="text-gray-700">
              Remember me
            </label>
          </div>
          <button
            class="text-white bg-gradient-to-r from-blue-600 to-blue-400   font-medium rounded-lg  px-5 py-2.5 w-full mb-10"
            type="submit"
          >
            Sign Up
          </button>
          <div className="text-center">
            <p className="text-gray-700">
              Don you have an account?{" "}
              <a href="/signin" className="text-blue-800 font-bold text-lg">
                Sign In
              </a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
