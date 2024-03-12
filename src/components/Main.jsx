import React, { useEffect, useState } from 'react'
import Header from './Header'
import Scores from './Scores/Scores'

export default function Main() {
  const [character,setCharacter]=useState(null);

  useEffect(()=>{
    const fetchCharacter = async ()=>{
      const response = await fetch(`https://rickandmortyapi.com/api/character/1`);
      const characterData = await response.json()
      console.log(characterData)
    }
    fetchCharacter();
  },[])
  return (
    <div>
        <Header/>
        <Scores/>
    </div>
  )
}
