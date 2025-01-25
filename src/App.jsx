import React from "react";
import "./App.css";
import { Button,Header } from 'semantic-ui-react'
import { useState,useEffect } from "react";
import photo from './assets/static.png';
function App() {
  //javascript
  const [coin,setCoin] = useState("");
  const values = ["Heads","Tails"];
  const tossFun = () =>{
    const id = Math.floor(Math.random()*2);
    const face = values[id];
    setCoin(face);
  }
  return(
    <div className="main">
      <img src={photo} alt="" id="static"/>
      <img src="https://media1.giphy.com/media/MOsuJf3qp3b1fQx2Iv/200w.gif?cid=6c09b9527kutfhdln2w6het3enu4safwej0t6hams09ncfkc&ep=v1_stickers_search&rid=200w.gif&ct=s" alt="" id="image"/>
      <Header size='huge'>{coin}</Header>
      <Button color='yellow' onClick={()=>{
        let image = document.getElementById("image");
        let staticImage = document.getElementById("static");
        image.style.display = "block";
        staticImage.style.display = "none";
        setTimeout(()=>{
          tossFun();
          image.style.display = "none";
          staticImage.style.display = "block";
        },3000)
      }}>
        Toss
      </Button>
      <div className="transparent">
      <button basic color='grey' content='Tail' onClick={()=>{
        let image = document.getElementById("image");
        let staticImage = document.getElementById("static");
        image.style.display = "block";
        staticImage.style.display = "none";
        setTimeout(()=>{
          setCoin("Tails");
          image.style.display = "none";
          staticImage.style.display = "block";
        },3000);
      }} id="button"></button>
      <button content='head' onClick={()=>{
        let image = document.getElementById("image");
        let staticImage = document.getElementById("static");
        image.style.display = "block";
        staticImage.style.display = "none";
        setTimeout(()=>{
          setCoin("Heads");
          image.style.display = "none";
          staticImage.style.display = "block";
        },3000);
      }} id="button"></button>
      </div>
    </div>
    
  );
}

export default App;