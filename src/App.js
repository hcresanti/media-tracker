import React, { useState } from 'react'
import './App.css';

function App() {

  const [boxes, setBoxes] = useState([])
  const testCover = "https://images-na.ssl-images-amazon.com/images/I/71t3PAc7G2L.jpg"
  const requestUrl = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes"

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
    const image = makeRequest()

    return (
      <div key={num} className='box'>
        <img className="box-image" src={image}/>
      </div>
    )
  }

  async function makeRequest() {
    await fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => { return data.items[0].volumeInfo.imageLinks.thumbnail })
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
