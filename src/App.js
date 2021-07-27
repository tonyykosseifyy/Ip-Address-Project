import React, { useState } from "react";
import "./App.css";
import Header from './Components/Header' ;
import Info from './Components/Info' ;

const App = () => {
  const [ data , setData ] = useState({}) ;
  const [ a , setA ] = useState({})
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setA ({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    }) ;
  }
  console.log('dataaa',a)
  return (
    <div className='app'>
      <Header setData={setData} />
      <Info />
    </div>
  );
}


export default App ;
