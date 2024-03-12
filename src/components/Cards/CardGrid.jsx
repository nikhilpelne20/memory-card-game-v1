import React from 'react'
import Card from './Card'

export default function CardGrid({character}) {
    const allCharacter = character.map((char)=>(
        <Card img={char.imgUrl} name={char.name} key={char.id}/>
    ))
  return (
    <div className='grid grid-cols-4 bg-gray-700'>{allCharacter}</div>
  )
}
