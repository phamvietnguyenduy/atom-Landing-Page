import React from 'react'

const Usedbtn = ({tittle,className}) => {
  return (
    <button className={`bg-gradient-to-tr from-thPurple to-thBlue py-2 px-6 rounded text-black duration-300 hover:scale-110 ${className}`}>{tittle}</button>
  )
}

export default Usedbtn