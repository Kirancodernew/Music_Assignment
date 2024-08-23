import React from "react";
import {assets} from '../assets/assets'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex min-h-[91vh] relative justify-center items-center">
      <div className="w-full h-full flex absolute">
        <div className="flex-1 bg-blue-200" />
        <div className="flex-1 bg-gray-100" />
      </div>
      <div className="z-20 flex flex-col md:flex-row items-center text-center md:text-left px-4">
        <div className="md:flex-1">
          <h1 className="text-[3rem] font-bold text-gray-800 mb-4">
            Welcome to Your Ultimate Music Experience
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover, play, and share your favorite tunes all in one place.
          </p>
          <Link to='/songs' className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-semibold text-lg transition duration-300">
            Start Listening
          </Link>
        </div>
        <div className="md:flex-1 mt-8 md:mt-0">
          <img 
            src={assets.homeImg} 
            alt="Music illustration" 
            className="w-full h-auto max-w-xs  m-auto rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
