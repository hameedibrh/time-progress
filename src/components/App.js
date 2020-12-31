import React from 'react'

import ParticleComponent from "./ParticleComponent";
import Data from './Data';
import Progress from './Progress';
import Quote from './Quote';
import "./App.css"





const App = () => {
  return (
    <div className="App"> 
      <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 'auto',
            height: 'auto',

            
            
          }}
        >
        </div>
     
    <div className="Backk">
    
      <div className="h1">TIME PROGRESS</div>
    </div>
     <Progress/>
    <Data/>
    <Quote/>
    
    </div>
  );
};




export default App
