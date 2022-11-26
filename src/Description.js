import React from "react";
import { DogImage } from "./DogImage";
import { useState } from 'react';

export const Description = () => {

  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg');

  const fetchDogData =async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await res.json();
      setDogUrl(json.message);
      console.log(json);
      } catch (e) {
      console.log("error", e);
      }
  };

  return(
    <dev>
      <h1>犬の画像を表示するサイトです</h1>
      <button onClick={fetchDogData} >更新</button>
      <DogImage url={dogUrl}/>
    </dev>
  );
};