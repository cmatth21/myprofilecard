import React from 'react'

export default function Button({clickHandler, btntext}) {
    return (
        <button className = "nameandskills" onClick = {clickHandler}>{btntext}</button>
    )
}


