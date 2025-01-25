import React from "react";
import "./App.css";
import { Button } from 'semantic-ui-react'
import { useState,useEffect } from "react";
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
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/401dde00-760d-406d-92ac-86ebaab75368/dbkp9bn-b742f397-4b29-4b96-901d-5dc638eee275.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwMWRkZTAwLTc2MGQtNDA2ZC05MmFjLTg2ZWJhYWI3NTM2OFwvZGJrcDlibi1iNzQyZjM5Ny00YjI5LTRiOTYtOTAxZC01ZGM2MzhlZWUyNzUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hZD6eeEunqAO9QOann6l4kOCDGMTd8QJMHtwttuShq8" alt="" id="image"/>
      <Button inverted color='green' onClick={()=>{
        let image = document.getElementById("image");
        image.style.display = "block";
        setTimeout(()=>{
          tossFun();
          image.style.display = "none";
        },3000)
      }}>
        Toss
      </Button>
      <h1>{coin}</h1>

      <div className="transparent">
      <button basic color='grey' content='Tail' onClick={()=>{
        let image = document.getElementById("image");
        image.style.display = "block";
        setTimeout(()=>{
          setCoin("Tails");
          image.style.display = "none";
        },3000);
      }}></button>
      <button content='head' onClick={()=>{
        let image = document.getElementById("image");
        image.style.display = "block";
        setTimeout(()=>{
          setCoin("Heads");
          image.style.display = "none";
        },3000);
      }}></button>
      </div>
    </div>
    
  );
}

export default App;