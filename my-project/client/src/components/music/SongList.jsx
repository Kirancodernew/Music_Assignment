import React, { useEffect, useState } from "react";
import DisplayHome from "./DisplayHome";
import MusicPlayer from "./MusicPlayer";
import { useAuth } from "../../context/AuthContext";

const SongList = () => {
  const { makeAuthenticatedRequest,user } = useAuth();
  
  useEffect(() => {
    makeAuthenticatedRequest();
  }, []);
  return (
    <>
    {
      user && (
      <div className="bg-black/85 md:px-20 px-4">
        <DisplayHome />
        <MusicPlayer />
      </div>
      )

    }
    </>
  );
};

export default SongList;
