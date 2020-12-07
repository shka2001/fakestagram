import React, { useState } from 'react'

export default function ImageItem({imageItem}) {
    const [newCounter, setNewCounter] = useState(0)
    //const stateVariable = use State[0] => [stateVariable, setVariable]
    //const newCounter = stateVariable[0]
    //const setNewCounter = stateVariable[1]

    /*setNewCounter(5)
      Sätter variablen till inparameter (5)
      Anropar den komponenten renderingsfunktion
    */

    function handleOnClick() {
        setNewCounter(newCounter + 1)
    }

    return (
        <div className="col-md-6">
            <img 
            onClick={handleOnClick}
            className="img-fluid" 
            src={imageItem.imageURL} 
            alt={imageItem.description}
            />
           <strong>{imageItem.title}</strong>
           <p>
               {imageItem.description}
           </p>
           <p>
               Likes: {imageItem.likes}
           </p>
           <p>
               New Counter: {newCounter}
           </p>
           
        </div>
    )
}
