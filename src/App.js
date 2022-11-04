// DO NOT DELETE

import * as React from 'react'
import { useState, useEffect } from 'react';
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg');
/*
  useEffect(() =>{
    fetch('https://dog.ceo/api/breeds/image/random', {method:'GET'})
    .then(res => res.json())
    .then(result => {
      setDogUrl(result)
    })
  },[])
*/
    const url = 'https://dog.ceo/api/breeds/image/random';
    const fetchDogData =async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setDogUrl(json.message);
        console.log(json);
        } catch (e) {
        console.log("error", e);
        }
    }

  return (
    <dev>
      <header>Dogアプリ</header>
      <h1>犬の画像を表示するサイトです</h1>
      <button onClick={fetchDogData} >更新</button>
      <img src={dogUrl}></img>
    </dev>
  )
}
