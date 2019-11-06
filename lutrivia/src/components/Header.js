import React from 'react'

function Header(props) {
    return (
        <div>
            <h1>Lutrivia</h1>
            <form>
                <button type='submit' onSubmit={() => props.handleNewGameButton()} >
                    New Game
                </button>
            </form>
            <h4>Score: {props.score}</h4>
        </div>
    )
}

export default Header