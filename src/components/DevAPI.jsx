import React from 'react'
import dev from '../assets/dev.webp'
import Pagesection from './Pagesection'

const DevAPI = () => {
  return (
        <Pagesection name={'Developers'} tittle={'Developers'} subtittle={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam necessitatibus veniam dolorum voluptatem consequatur provident quaerat sint consequuntur porro et! Placeat veritatis'}>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                <div className='flex flex-col w-full gap-4 p-8 rounded-lg lg:w-1/2'>
                    <p className='border-l-4 pl-4 odd:border-thBlue even:border-thPurple'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className='border-l-4 pl-4 odd:border-thBlue even:border-thPurple'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className='border-l-4 pl-4 odd:border-thBlue even:border-thPurple'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className='border-l-4 pl-4 odd:border-thBlue even:border-thPurple'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <img src={dev} alt="" className='rounded-lg w-1/2 lg:rotate-6 hover:rotate-0  duration-300 shadow-lg shadow-thBlue'/>
            </div>
        </Pagesection>
  )
}

export default DevAPI