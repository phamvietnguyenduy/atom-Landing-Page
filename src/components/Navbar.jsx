import React, { Fragment } from 'react'
import { Link } from 'react-scroll'
import Usedbtn from './Usedbtn'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = ({checkmenu, setcheckmenu}) => {
    const menu=[
        {
            id: 1,
            name:'home'
        },
        {
            id: 2,
            name:'Product'
        },
        {
            id: 3,
            name:'About us'
        },
        {
            id: 4,
            name:'Cart'
        }
    ]
  return (
    <>
        <div className='absolute w-full h-24 text-white z-20'>
            <div className='flex flex-row justify-between items-center max-w-screen-xl mx-auto px-4 h-full'>
                <div>
                    <h1 className='text-white font-bold tracking-widest text-3xl'>LOGO</h1>
                </div>
                <div className='hidden lg:flex items-center'>
                    <ul className='flex'>
                    {menu.map(({id,name})=>(
                        <li key={id} className='p-4 uppercase cursor-pointer text-white hover:text-thOrange duration-200'>{name}</li>
                    ))}
                    </ul>
                    <Usedbtn className={'ml-4 capitalize'} tittle={'start'}/>
                </div>
                <div onClick={()=>setcheckmenu(!checkmenu)} className='block lg:hidden text-white'>
                    {
                        checkmenu?<FaTimes size={30}/>:<FaBars size={30}/>
                    }
                </div>
            </div>
        </div>
        {/* mobile-menu */}
        <div className={` w-full bg-black text-white absolute z-10 left-0 h-fit lg:hidden py-12 flex justify-center text-center duration-500 
                        ${checkmenu ? "top-20 rounded-2xl opacity-95" : "top-[-100%]"}`}>
            <ul>
                {menu.map(({id,name})=>(
                        <li key={id} className='p-4 uppercase cursor-pointer hover:text-thBlue duration-200'>{name}</li>
                ))}
                 <Usedbtn className={'mt-2 capitalize'} tittle={'start'}/>
            </ul>
           
        </div>
    </>
  )
}

export default Navbar