import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../../assets/assets";
import MusicPlayer from "./MusicPlayer";
import { useMusic } from "../../context/MusicContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const DisplayAlbum = () => {
  const { id } = useParams();
  const albumItem = albumsData[id];
  const {playWithId}=useMusic();

  const { makeAuthenticatedRequest } = useAuth();
  
  useEffect(() => {
    makeAuthenticatedRequest();
  }, []);


  return (
    <>
      <div className="bg-black/85 md:px-20 px-4">
        <div className="flex items-center text-gray-200 pt-8 font-semibold  sm:text-xl ">
          <Link
            to="/songs" // Adjust the route as per your app's routing
            className="bg-gray-500 hover:bg-gray-200 hover:text-black  rounded-2xl transition duration-300 ease-in-out px-5"
          >
             Back
          </Link>
        </div>
        <div className="flex gap-8 flex-col md:flex-row md:items-end text-white py-8 md:py-10 ">
          <img
            className="w-48 rounded m-auto md:m-0"
            src={albumItem.image}
            alt="albumData"
          />
          <div className="flex flex-col">
            <p className="mb-4 text-lg font-semibold ">Playlist</p>
            <h2 className="text-5xl font-bold mb-4 md:text-7xl">
              {albumItem.name}
            </h2>
            <h4>{albumItem.desc}</h4>
            <p className="mt-1">
              <img
                className="inline-block w-5"
                src={assets.spotify_logo}
                alt="spotify_logo"
              />
              <b>Spotify</b>. 1,323,154 likes . <b>50 songs,</b>
              about 2 hr 30 min
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
          <p>
            <b className="mr-4">#</b> Title
          </p>
          <p>Album</p>
          <p className="hidden sm:block">Date Added</p>
          <img
            className="m-auto w-4"
            src={assets.clock_icon}
            alt="clock_icon"
          />
        </div>
        <hr />
        {songsData.map((item, index) => {
          return (
            <div
              onClick={()=>playWithId(item.id,"songsData")}
              key={index}
              className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
            >
              <p className="text-white">
                <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                <img
                  className="hidden  md:inline w-10 mr-5"
                  src={item.image}
                  alt="image"
                />
                {item.name}
              </p>
              <p className="text-[15px] "> {albumItem.name}</p>
              <p className="text-[15px] hidden sm:block">5 days ago</p>
              <p className="text-[15px] text-center">{item.duration}</p>
            </div>
          );
        })}
      </div>
      <MusicPlayer/>
    </>
  );
};

export default DisplayAlbum;
