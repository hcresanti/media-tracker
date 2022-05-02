import React, { useState, useRef, useEffect } from 'react'
import './App.css';

function App() {

  const [boxes, setBoxes] = useState([])


  // Create media
  function HandleCreateMedia(e) {
    var newBoxes = [...boxes]
    newBoxes.push(Box((Math.floor(Math.random() * 100))))
    setBoxes(newBoxes)
  }
  
  // Delete media
  function HandleDeleteMedia(e) {
    var newBoxes = [...boxes]
    newBoxes.pop()
    setBoxes(newBoxes)
  }


  // BOX OBJECT
  function Box(num) {
    return (
      <div key={num} className='box'>
        {num}
      </div>
    )
  }

  return (
    <div className='parent-container'>

      <div className='header-area'>
        <button onClick={HandleCreateMedia}>
          <label>Create</label>
        </button>
        <button onClick={HandleDeleteMedia}>
          <label>Delete</label>
        </button>
      </div>

      <div className="box-area">
        <div className="box-container">
          {boxes}
        </div>
      </div>
    </div>

  );
}

export default App;
