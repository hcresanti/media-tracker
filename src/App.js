import React, { useState, useRef, useEffect } from 'react'
import './App.css';

function App() {

  const [boxes, setBoxes] = useState([])
  const testCover = "https://images-na.ssl-images-amazon.com/images/I/71t3PAc7G2L.jpg"
  const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBzLvj0d2_mb6fa5aEeV4hrvFc2XE6PRBg"

  var currRequest
  var currRequestResults

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
        <img className="box-image" src={testCover}/>
      </div>
    )
  }

  function makeRequest() {
    fetch(requestUrl)
      .then((response) => response.json())
      .then((actualData) => console.log(actualData.items[0].volumeInfo.imageLinks.thumbnail));
  }

  useEffect(() => {
    makeRequest()
   }, []);

  return (
    <div className='parent-container'>

      <div className='header-area'>
        <button onClick={HandleCreateMedia}>
          <label>Create</label>
        </button>

        <button onClick={HandleDeleteMedia}>
          <label>Delete</label>
        </button>

        <input type={"text"}/>
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
