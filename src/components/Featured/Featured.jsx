import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'

function Featured({type}) {
    return (
        <div className='Featured   h-[95vh] relative bg-black'>
             {type &&(
             <div className='category   flex items-center absolute  top-[80px] left-[50px]  z-[999]'>
                 <span className='  font-medium text-white text-[30px]'>{type==='movie'?"Movies":"Series"}</span> 
                 <select name='genre' className='bg-black border border-solid border-white text-white ml-[20px] p-[5px] ' id="genre">
                 <option>Genre</option>
                 <option value="adventure">Adventure</option>
                 <option value="comedy">Comedy</option>
                 <option value="crime">Crime</option>
                 <option value="fantasy">Fantasy</option>
                 <option value="historical">Historical</option>
                 <option value="horror">Horror</option>
                 <option value="romance">Romance</option>
                 <option value="sci-fi">Sci-fi</option>
                 <option value="thriller">Thriller</option>
                 <option value="western">Western</option>
                 <option value="animation">Animation</option>
                 <option value="drama">Drama</option>
                 <option value="documentary">Documentary</option>


                 </select>
             </div>

             )}
             
         <img className='imagescover w-full relative h-full cover opacity-80' alt="" 
         src="http://occ-0-7200-778.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVdTa_6p8WwhZgmS44PlnXaVHbiFKB5kA4lVsdHacVqYOrBcH0o3n8Q4863mzkHt1LYf9Lr2qm7rslnq_DhZZaJ0EiwlcQd9ON2i.webp?r=3a1"></img>
        
          <div className='info     w-[35%] flex flex-col absolute left-[50px] bottom-[100px] text-white'>
          <img className='w-[400px]'
          src=
          "http://occ-0-784-778.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbycMGEbzK3qi5HT3Oaw33xwqlDWIcbzD8Jm0ALMs8ZmPvne_LayU6-ffangnmtzrpGTX0JMEHQ4iVTmLvA5W_dGzo4QAAK0Ay2L1QI_AfDww-CE4cYy1MkbzRMpsukh5QTJ0hzqiSOBwoKpKd_3gzpFSj864uzGarsTxRPa72Sm08eTr-M4QQ.webp?r=71a"
          alt=""
        />
        <p className='desc overflow-clip font-semibold mt-[20px] text-[16px]'>
        Family. Culture. Community. New couple Ezra and Amira come
       </p>
       <p className='desc overflow-clip font-semibold   text-[16px]'>
       from different worlds, but one thing's universal: Meeting each 
       </p>
       <p className='desc overflow-clip font-semibold  mb-[20px] text-[16px]'>
       other's parents is so awkward.
   
       </p>
       <div className='buttons    flex'>
        <button className='py-[10px] rounded-md flex items-center justify-center mr-[10px] text-[18px] font-semibold px-[20px] bg-white text-black'> <PlayArrow />       <span className='ml-[5px]'>Play</span></button>
        <button className='py-[10px] rounded-md flex items-center justify-center mr-[10px] text-[18px] font-semibold px-[20px]  bg-gray-500 text-white'><InfoOutlined /> <span className='ml-[5px]'> Info </span></button>
       </div>
          </div>
        </div>
    )
}

export default Featured
