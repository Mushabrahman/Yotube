import React,{useState} from 'react'
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { YOUTUBE_VIDEO_URL } from './constants.js'


const Body = () => {
  const[selectedCategory,setselectedCategory]=useState('LoveToday');
  const[videos,setvideos]=useState([ ]);
  
  useEffect(()=>{
    getvideos();
  },[])

  const getvideos= async () =>{
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setvideos(json.items);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  return (
    <div className={isMenuOpen?'bodyafter':'body'}>
   <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
  
   <VideoContainer videos={videos} />
    </div>
  )
}

export default Body;
