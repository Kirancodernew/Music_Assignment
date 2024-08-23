import React from "react";
import { assets } from "../../assets/assets";
import { useMusic } from "../../context/MusicContext";

const MusicPlayer = () => {
  const { seekBg, seekBar, audioRef, track, play, pause, playStatus,time,prev,next,seekSong } =
    useMusic();
  
  // console.log("music data:", track);
  return (
    <>
      <div className="bg-black/85 md:px-20 px-4">
        <div className="h-[10%] bg-black flex justify-between items-center text-white p-4 ">
          <div className="hidden lg:flex items-center gap-4">
            <img className="w-12" src={track.image} alt="img1" />
            <div>
              <p>{track.name}</p>
              <p>{`${track.desc.slice(0, 12)}...`}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-4">
              <img
                className="w-4 cursor-pointer"
                src={assets.speaker_icon}
                alt="suffel"
              />
              <img
              onClick={prev}
                className="w-4 cursor-pointer"
                src={assets.prev_icon}
                alt="prev_icon"
              />
              {playStatus ? (
                <img
                  onClick={pause}
                  className="w-4 cursor-pointer"
                  src={assets.pause_icon}
                  alt="prev_icon"
                />
              ) : (
                <img
                  onClick={play}
                  className="w-4 cursor-pointer"
                  src={assets.play_icon}
                  alt="prev_icon"
                />
              )}

              <img
                onClick={next}
                className="w-4 cursor-pointer"
                src={assets.next_icon}
                alt="next_icon"
              />
              <img
                className="w-4 cursor-pointer"
                src={assets.loop_icon}
                alt="loop_icon"
              />
            </div>
            <div className="flex items-center gap-5">
              <p>{time.currentTime.minute} : {time.currentTime.second}</p>
              <div
                onClick={seekSong}
                ref={seekBg}
                className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
              >
                <hr
                  ref={seekBar}
                  className="h-1 border-none w-0 bg-green-800 rounded-full"
                />
              </div>
              <p>{time.totalTime.minute} : {time.totalTime.second}</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 opacity-75">
            <img className="w-4 " src={assets.play_icon} alt="play_icon" />
            <img className="w-4" src={assets.mic_icon} alt="mic_icon" />
            <img className="w-4" src={assets.queue_icon} alt="queue_icon" />
            <img className="w-4" src={assets.speaker_icon} alt="speaker_icon" />
            <img className="w-4" src={assets.volume_icon} alt="volume_icon" />
            <div className="w-20 bg-slate-50 h-1 rounded" />
            <img
              className="w-4"
              src={assets.mini_player_icon}
              alt="mini_player_icon"
            />
            <img className="w-4" src={assets.zoom_icon} alt="zoom_icon" />
          </div>
        </div>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
};

export default MusicPlayer;

