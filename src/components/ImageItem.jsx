import React, { useState } from 'react'
import Comments from './Comments'

export default function ImageItem({imageItem}) {
    const [likes, setLikes] = useState(imageItem.likes)
    //const stateVariable = use State[0] => [stateVariable, setVariable]
    //const newCounter = stateVariable[0]
    //const setNewCounter = stateVariable[1]

    /*setNewCounter(5)
      Sätter variablen till inparameter (5)
      Anropar den komponenten renderingsfunktion
    */

    function handleOnClick() {
        setLikes(likes + 1)
    }

    return (
        <div className="col-md-6">
            <img 
            className="img-fluid" 
            src={imageItem.imageURL} 
            alt={imageItem.description}
            />
           <strong>{imageItem.title}</strong>
           <p>
               {imageItem.description}
           </p>
           <div onClick={handleOnClick}>
               ❤ {likes}
           </div>
           <Comments />
        </div>
    )
}
