import React from 'react'
import Pagesection from './Pagesection'
import tele from '../assets/tele.webp'
import Usedbtn from './Usedbtn'
import {FaTwitter,FaYoutube} from 'react-icons/fa'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <Pagesection name={'Contact'} tittle={'Contact'} subtittle={' Molestias exercitationem magni inventore animi, debitis vitae impedit?'}>
        <div className='flex flex-col lg:flex-row mt-4 gap-8'>
            <div className='w-full lg:w-1/2 flex flex-col p-4 h-full p-4 items-center justify-center'>
                <img src={tele} alt="tele" className='rounded-full w-72 h-72 object-cover shadow-thBlue shadow-lg' />
                <p className='py-12 max-w-md'>dolor sit amet consectetur adipisicing elit. Vero id doloribus corporis veniam illum cumque impedit libero excepturi ut</p>
                <div className='flex flex-row items-center justify-around mx-auto w-4/5'>
                    <Usedbtn className='flex w-20 items-center justify-center !text-white' tittle={<FaTwitter/>}/>
                    <Usedbtn className='flex w-20 items-center justify-center !text-white' tittle={<FaYoutube/>}/>
                </div>
            </div>
            <div className='w-full lg:w-full p-4 rounded-xl h-full'>
                <ContactForm/>
            </div>
        </div>
    </Pagesection>
  )
}

export default Contact