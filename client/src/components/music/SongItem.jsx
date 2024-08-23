import React from 'react'
import { useMusic } from '../../context/MusicContext'


const SongItem = ({name,image,desc,id,source}) => {
  const {playWithId} =useMusic();
  return (
    <div onClick={()=>playWithId(id, source)} className='min-w-[150px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt="image" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
