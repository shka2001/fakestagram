import React from 'react'
import { imageList } from "../imageList"

export default function ImageListPage() {
    console.log(imageList)
    return (
        <>
            <h2>Instagram</h2>
            {imageList.map ((imageItem, index) => {
                return <p key={imageItem.id}>{imageItem.title}</p>
            } )}
        </>
    )
}
