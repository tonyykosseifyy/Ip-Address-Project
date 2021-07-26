import React, { useState } from "react";
import "./App.css";
import Header from './Components/Header' ;


const App = () => {
  const [ data , setData ] = useState({}) ;
  return (
    <div className='app'>
      <Header setData={setData} />
    </div>
  );
}


export default App ;
