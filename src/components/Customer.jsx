import React from 'react'
import Pagesection from './Pagesection'
import {FaFacebook,FaTwitter,FaGoogle,FaAppStore} from 'react-icons/fa'


const Customer = () => {
    const cart=[
        {
            id:1,
            tittle: '15$',
            subtittle: '100 Product can be used'
        },
        {   
            id:2,
            tittle: 'Primium',
            subtittle: 'Connect to all your divices'
        },
        {
            id:3,
            tittle: '1 month Trial',
            subtittle: 'Free trial with 10 product'
        },
        {
            id:4,
            tittle: '20% Discount',
            subtittle: 'For new member'
        }
    ]
    const icon=[
        {
            id:1,
            tittle: <FaFacebook size={30}/>,
            subtittle:'Facebook'
        },
        {
            id:2,
            tittle:<FaAppStore size={30}/>,
            subtittle:'AppStore'   
        },
        {
            id:3,
            tittle: <FaGoogle size={30}/>,
            subtittle:'Google'
        },
        {
            id:4,
            tittle: <FaTwitter size={30}/>,
            subtittle:'Twiter'
        }

    ]
  return (
    <Pagesection name={'Customer'} tittle={'Customers'} subtittle={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore dolor voluptatum culpa non! Inventore deleniti corrupti dolores debitis adipisci voluptates! Necessitatibus,'} >
        <>
            <div className='grid lg:grid-cols-4 text-left mb-16 gap-8'>
                    {
                        cart.map(({id,tittle,subtittle})=>(
                            <div key={id} className='odd:bg-thBlue even:bg-thOrange rounded-lg text-black p-4'>
                                <h1 className='text-3xl font-bold mb-2'>{tittle}</h1>
                                <p>{subtittle}</p>
                            </div>
                        ))
                    }
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-around gap-6'>
                    {
                        icon.map(({id,tittle,subtittle})=>(
                            <div key={id} className='flex items-center capitalize p-4 rounded-lg hover:text-thBlue group:'>
                                {tittle}
                                <p className='ml-2'>{subtittle}</p>
                            </div>
                        ))
                    }
            </div>
        </>
    </Pagesection>
  )
}

export default Customer