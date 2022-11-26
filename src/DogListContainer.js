import React, { useEffect, useState } from "react";
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState('https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg')
  const [selectedBreed, setSelectedBreed] = useState('akita')
  const [dogImg, setDogImg] = useState('')
  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      setBreeds(data.message);
      console.log(data.message);
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  
  const handleChange = function(e){
    setSelectedBreed(e.target.value)
  }

  const showDogImg = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/6`)
    .then(res => res.json())
    .then(data => {
      console.log(data.message)
      setDogImg(data.message)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const dogGallery = dogImg.map((value) =>{
    return <li key={value}><img src={value}></img></li>
  })

  return(
    <dev>
      <BreedsSelect 
      breeds={breeds} 
      selects={selectedBreed} 
      change={handleChange}
      />
      <button onClick={showDogImg}>表示</button>
      <ul>
        {dogGallery}
      </ul>
    </dev>
  )
}