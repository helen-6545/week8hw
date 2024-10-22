'use client';
import React from "react";
import { useEffect, useState } from 'react'
import {useRouter} from "next/navigation";
let Titles = [" "]
let DataHotel = [" ", " ", " ", " "]


export default function home(){
  const [data, setData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    fetch('/data.json')
        .then(response => response.json())
        .then(data => setData(data));
}, []);
if(data != null)
{Titles = Object.getOwnPropertyNames(data)}

const [showData, setShowData] = React.useState([" ", " ", " ", " "]);

function dataFind(num){
if(data != null){
  DataHotel[0] = data[Titles[num]]["StartingYear"]
  DataHotel[1] = data[Titles[num]]["EndingYear"]
  DataHotel[2] = data[Titles[num]]["Creator"]
  DataHotel[3] = data[Titles[num]]["SeasonAmount"]

  setShowData(DataHotel)
  console.log(showData)
  router.refresh()
}}



  return(<div>

  <p><button className="Buttons" onClick={() => dataFind(0)}>{Titles[0]}</button></p>
  <p><button className="Buttons" onClick={() => dataFind(1)}>{Titles[1]}</button></p>
  <p><button className="Buttons" onClick={() => dataFind(2)}>{Titles[2]}</button></p>
  <p><button className="Buttons" onClick={() => dataFind(3)}>{Titles[3]}</button></p>
  <p><button className="Buttons" onClick={() => dataFind(4)}>{Titles[4]}</button></p>

  

  <br /><p>Starting Year: {showData[0]}</p>
  <p>Ending Year: {showData[1]}</p>
  <p>Creator: {showData[2]}</p>
  <p>Number of Seasons: {showData[3]}</p>

  
  </div>);


}
