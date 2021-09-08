import React from 'react';

const Gomb=(props)=>{
return(
    <button className={`switch ${props.egAVillany ? "light" : "dark"}`}
    onClick={props.switchIt}
    >{props.text}</button>
  )
}
export default Gomb