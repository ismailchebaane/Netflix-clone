import React from 'react'
import {Link} from "react-router-dom"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
function Watch() {
    return (
        <div className='watch     w-full h-[100vh] '>
            <Link to="/" className='Back   flex items-center absolute top-[10px] left-[10px] text-white  cursor-pointer z-[2]'>
            <ArrowBackOutlinedIcon />
            Home
            </Link>
            <video
        className="video   w-full cover  h-full "
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      />
        </div>
    )
}

export default Watch;
