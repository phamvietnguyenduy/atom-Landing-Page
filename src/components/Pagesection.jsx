import React from 'react'

const Pagesection = ({name,tittle,subtittle,children}) => {
  return (
    <div className='max-w-screen-xl mx-auto h-fit' name={name}>
        <div className='my-32 mx-8 text-center lg:text-left'>
            <h1 className='text-5xl'>{tittle}</h1>
            <p className='mt-8 mb-16'>{subtittle}</p>
            {children}
        </div>
    </div>
  )
}

export default Pagesection