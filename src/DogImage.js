import React from "react";

export const DogImage = (props) => {
  console.log(props);
  return(
    <dev>
      <img src={props.url}></img>
    </dev>
  );
};