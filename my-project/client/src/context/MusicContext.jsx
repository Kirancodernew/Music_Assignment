import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData,monthlyHit } from "../assets/assets";
const musicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  useEffect(() => {
    setTimeout(() => {
      if(audioRef.current){
        audioRef.current.ontimeupdate=()=>{
          seekBar.current.style.width=(Math.floor((audioRef.current.currentTime/audioRef.current.duration)*100) + "%")
          setTime({
            currentTime: {
              second: Math.floor(audioRef.current.currentTime %60),
              minute: Math.floor(audioRef.current.currentTime /60),
            },
            totalTime: {
              second: Math.floor(audioRef.current.duration %60),
              minute: Math.floor(audioRef.current.duration /60),
            },
          });
        }
      }
      
    }, 1000);
  }, [audioRef]);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id, source) => {
    let selectedTrack;
    if (source === "songsData") {
      selectedTrack = songsData[id];
    } else if (source === "monthlyHit") {
      selectedTrack = monthlyHit[id];
    }
    if (selectedTrack) {
      await setTrack(selectedTrack);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };
const prev=async()=>{
  if(track.id>0){
    await setTrack(songsData[track.id-1]);
    await audioRef.current.play();
    setPlayStatus(true);
  }
}
const next=async()=>{
  if(track.id<songsData.length-1){
    await setTrack(songsData[track.id+1]);
    await audioRef.current.play();
    setPlayStatus(true);
  }
}

const seekSong = (e) => {
  // console.log(e.nativeEvent.offsetX)
  // console.log(seekBg);
  if (seekBg.current && audioRef.current) {
      const clickPosition = e.nativeEvent.offsetX;
      const elementWidth = seekBg.current.offsetWidth;
      const duration = audioRef.current.duration;

      audioRef.current.currentTime = (clickPosition / elementWidth) * duration;
  }
};


  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    prev,next,seekSong
  };
  return (
    <musicContext.Provider value={contextValue}>
      {children}
    </musicContext.Provider>
  );
};

export const useMusic = () => useContext(musicContext);
