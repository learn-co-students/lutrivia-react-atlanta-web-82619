import React from 'react'

function Question (props) {
    return (
        <div>
            <p>{props.text}</p>
            <button 
                value='true'
                onClick={(e) => props.handleButtonClick(e, props.answer)} 
            >
                True
            </button>
            <button 
                value='false'
                onClick={(e) => props.handleButtonClick(e, props.answer)} 
            >
                False
            </button>
        </div>
    )
}

export default Question