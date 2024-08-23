import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import MusicPlayer from "./components/music/MusicPlayer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Navbar from "./pages/NavBar";
import SongList from "./components/music/SongList";
import Footer from './pages/Footer'
import DisplayAlbum from "./components/music/DisplayAlbum";
const App = () => (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/songs" element={<SongList />} />
        <Route path="/songs/album/:id" element={<DisplayAlbum />} />
        <Route path="/player" element={<MusicPlayer/>} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}

      </Routes>
      <Footer/>
    </>
  
);

export default App;
