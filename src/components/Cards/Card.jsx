import React from 'react'

export default function Card({img,name}) {
  return (
    <div className='w-[250px] h-[300px] bg-gray-400'>
      <img className='w-[250px] h-[250px]' src={img} alt={name}/>
      <p>{name}</p>
    </div>
  )
}
