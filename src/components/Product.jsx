import React from 'react'
import Pagesection from './Pagesection'
import {FaRocket,FaSatellite,FaRobot,FaMicrochip} from 'react-icons/fa'

const Product = () => {
    const article=[
        {
            id:1,
            icon:<FaRocket size={50} className="text-white"/>,
            tittle: "Boot Your Progress",
            subtittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit animi, dolorum sed voluptatem consequatur in cum sunt suscipit unde distinctio voluptatibus? Delectus repudiandae alias minima consequatur officiis consectetur eveniet"
        },
        {
            id:2,
            icon: <FaRobot size={50} className="text-white"/>,
            tittle: "AI Technology",
            subtittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit animi, dolorum sed voluptatem consequatur in cum sunt suscipit unde distinctio voluptatibus? Delectus repudiandae alias minima consequatur officiis consectetur eveniet"
        },
        {
            id:3,
            icon: <FaSatellite size={50} className="text-white"/>,
            tittle: "Give Back Location",
            subtittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit animi, dolorum sed voluptatem consequatur in cum sunt suscipit unde distinctio voluptatibus? Delectus repudiandae alias minima consequatur officiis consectetur eveniet"
        },
        {
            id:4,
            icon: <FaMicrochip size={50} className="text-white"/>,
            tittle: "Doshin HighTech",
            subtittle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit animi, dolorum sed voluptatem consequatur in cum sunt suscipit unde distinctio voluptatibus? Delectus repudiandae alias minima consequatur officiis consectetur eveniet"
        }
    ]
  return (
    <Pagesection name={'roduct'} tittle={'Product'}
    subtittle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit animi, dolorum sed voluptatem consequatur in cum sunt suscipit unde distinctio voluptatibus? Delectus repudiandae alias minima consequatur officiis consectetur eveniet.'}>
        <div className='grid lg:grid-cols-2 gap-12 text-black'>
            {
                article.map(({id,icon,tittle,subtittle})=>(
                    <div key={id} className='group bg-gradient-to-b from-thOrange to-thPurple rounded-lg flex flex-col items-center justify-center text-center p-8'>
                        <div className='flex  items-center justify-center duration-300 group-hover:scale-110'>
                            <div className='bg-black rounded-full m-4 p-5'>{icon}</div>
                        </div>
                        <h1 className='text-2xl lg:text-3xl capitalize mb-1 font-medium'>{tittle}</h1>
                        <p>{subtittle}</p>
                    </div>
                ))
            }
        </div>
    </Pagesection>
  )
}

export default Product