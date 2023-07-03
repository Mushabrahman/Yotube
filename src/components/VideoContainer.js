import React, { useEffect, useState } from 'react'
import Buttons from "./Buttons.js"
import { YOUTUBE_VIDEO_URL } from './constants.js'
import Videocard from "./Videocard.js"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';



const VideoContainer = ({videos}) => {
 
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
    if(videos)
 
  
  return (
    <div className={isMenuOpen?'videoContainerAfter':"videoContainer"}>
      {/* <div className='Button'><Buttons/></div>
       */}
      <div className='all-videos'>
            {videos?.map((eachvideo)=>(
               <Videocard key={eachvideo.id.videoId===undefined?eachvideo.id:eachvideo.id.videoId} eachvideo={eachvideo}/>    
            ))}  
       
        </div>
    </div>
  )
}

export default VideoContainer;
