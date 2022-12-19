import React, { useRef, useState } from 'react'
import video from '../assets/video.mp4'
import Usedbtn from './Usedbtn';
import {FaPauseCircle,FaPlayCircle} from 'react-icons/fa'
const Herosaction = ({checkmenu}) => {
    const [isvideoplay, setisvideoplay] = useState(true);
    const videoref= useRef();
    const handlevideoPause=()=>{
        videoref.current.pause()
        setisvideoplay(false)
    }
    const handlevideoPlay=()=>{
        videoref.current.play()
        setisvideoplay(true)
    }
  return (
   <div className='flex items-end justify-center w-full h-screen text-center'>
        <video className='object-cover h-full w-full absolute -z-9' ref={videoref} src={video} muted loop autoPlay></video>
        <div className={`p-8 w-full flex flex-col items-center justify-center duration-500 absolute 
            ${
                isvideoplay?'':'bg-black/80',
                checkmenu?'opacity-20':'opacity-100'
            }
        `}>
        <h1 className='text-4xl lg:text-7xl'>Web 3.0</h1>
        <h1 className='text-4xl lg:text-7xl capitalize mb-12'>The <span className=' text-thBlue font-bold'>Future</span> Is Here</h1>
        <div className='flex items-center'>
            <Usedbtn className={'capitalize md:!w-fit '} tittle={'Discover'}/>
            <Usedbtn className={'capitalize mx-12'} tittle={'Product'}/>
            {
                isvideoplay?<FaPauseCircle className='text-thBlue cursor-pointer hover:scale-110 duration-200' onClick={handlevideoPause} size={30}/>
                :<FaPlayCircle onClick={handlevideoPlay} className='text-thBlue cursor-pointer hover:scale-110 duration-200'size={30}/>
            }
        </div>
        </div>
   </div>
  )
}

export default Herosaction