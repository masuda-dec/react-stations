import React from "react";

export const BreedsSelect = (props) => {
  const breedList = Object.keys(props.breeds).map((value) => {
   return <option key={value} >{value}</option>
  })
  return(
    <dev>
      <select value={props.selects} onChange={props.change}>
        {breedList}
      </select>
    </dev>
  );
};