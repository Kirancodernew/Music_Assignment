import React from 'react'
import AlbumItem from './AlbumItem'
import { albumsData,songsData,monthlyHit } from '../../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
    <div className="lg:pb-10 pb-4">
    <div className='text-white'>
        <h1 className='py-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {
                albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} 
                id={item.id} image={item.image}/>))
            }
        </div>
    </div>
    <div className='my-4 text-white'>
        <h1 className='py-5 font-bold text-2xl '>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
            {
                songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} 
                id={item.id} image={item.image} source="songsData"/>))
            }
        </div>
    </div>


    <div className='my-4 text-white'>
        <h1 className='py-5 font-bold text-2xl '>Monthly Hit Songs</h1>
        <div className='flex overflow-auto'>
            {
                monthlyHit.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} 
                id={item.id} image={item.image} source="monthlyHit"/>))
            }
        </div>
    </div>
    </div>
    </>
  )
}

export default DisplayHome
