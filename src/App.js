import React, { useState } from "react";
import "./App.css";
import Header from './Components/Header' ;
import Info from './Components/Info' ;
import Body from './Components/Body'

const App = () => {
  const [ data , setData ] = useState({}) ;
  const [ load , setLoad ] = useState(false) ;

  return (
    <div className='app'>
      <Header setData={setData} setLoad={setLoad} />
      <Info data={data} />
      <Body data={data} />
    </div>
  );
}


export default App ;
