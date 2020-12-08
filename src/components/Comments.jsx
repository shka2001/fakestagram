import React, {useRef} from 'react'

export default function Comments() {
    const inputRef = useRef()


    function handleOmClick() {
        //Hämta ut det användaren har skrivit i input fältet
        document.getElementById("commentInput").value
        //Lägg till det i Comment List
    }
    return (
        <div>
            Comment List
            <input id="commentInput" type="text" />
            <button 
            onClick={handleOmClick} 
            className="btn btn-primary"
            >
                Send
            </button>
        </div>
    )
}
