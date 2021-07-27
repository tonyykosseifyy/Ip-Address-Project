import React, { useState } from "react";
import "./App.css";
import Header from './Components/Header' ;
import Info from './Components/Info' ;
import Body from './Components/Body'

const App = () => {
  const [ data , setData ] = useState({}) ;
  const [ a , setA ] = useState({}) ;
  const [ load , setLoad ] = useState(false) ;
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setA ({
        lat: position.coords.latitude,
        long: position.coords.longitude
      })
    }) ;
  }
  console.log('app data' , data)
  return (
    <div className='app'>
      <Header setData={setData} setLoad={setLoad} />
      <Info />
      <div id='mapid'></div>
      <Body data={data} />
    </div>
  );
}


export default App ;
