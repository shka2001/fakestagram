import React, {useRef} from 'react'

export default function Comments() {
    const inputRef = useRef()
    const commentList = [
        "hej",
        "tjsna",
        "koolt"
    ]

    function handleOmClick() {
        //Hämta ut det användaren har skrivit i input fältet
        const value = inputRef.current.value
        //console.log(inputRef.current.value)
        //document.getElementById("commentInput").value
        //Lägg till det i Comment List
        commentList.push(value)
        console.log(commentList)
    }

    return (
        <div>
            {/*Comment List*/}
            {commentList.map((comment, index) =>{
                return <p key={index}>{comment}</p>
            })}
            <input ref={inputRef} type="text" />
            <button 
            onClick={handleOmClick} 
            className="btn btn-primary"
            >
                Send
            </button>
        </div>
    )
}
