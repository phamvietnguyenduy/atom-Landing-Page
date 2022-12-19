import React from 'react'
import Usedbtn from './Usedbtn'

const ContactForm = () => {
  return (
    <div className='P-4 text-left'>
        <form action="https://getform.io/f/33b90797-d984-4a90-8801-fe2b229461b7" method="POST">
            <div className='grid lg:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col col-span-2 lg:col-span-1 '>
                    <label htmlFor="" className='capitalize font-light text-sm py-1'>Name</label>
                    <input type="text" name="name" id="" className='border-2 flex focus:outline-none text-gray-900 rounded-lg p-3 '/>
                </div>
                <div className='flex flex-col col-span-2 lg:col-span-1 '>
                    <label htmlFor="" className='capitalize font-light text-sm py-1'>Phone</label>
                    <input type="text" name="phone" id="" className='border-2 flex focus:outline-none text-gray-900 rounded-lg p-3 '/>
                </div>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor="" className='capitalize font-light text-sm py-1'>Email</label>
                    <input type="email" name="email" id="" className='border-2 flex focus:outline-none text-gray-900 rounded-lg p-3 '/>
                </div>
                <div className='flex flex-col col-span-2'>
                    <label htmlFor="" className='capitalize font-light text-sm py-1'>Message</label>
                    <textarea rows={10} type="text" name="message" id="" className='border-2 flex focus:outline-none text-gray-900 rounded-lg p-3 '/>
                </div> 
                <div  className='flex items-center justify-start'>
                    <Usedbtn type="Submit" tittle={'Submit'} className='cursor-pointer capitalize mt-4'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactForm