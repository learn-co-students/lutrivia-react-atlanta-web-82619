import React from 'react'
import Question from './Question'

function GameBox (props) {
    return (
        <div className='game-box'>
            {props.questions.map(q => <Question text={q.text} answer={q.answer} handleButtonClick={props.handleButtonClick}/>)}
        </div>
    )
}

export default GameBox