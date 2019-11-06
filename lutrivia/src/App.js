import React, {Component} from 'react';
import Header from './components/Header'
import GameBox from './components/GameBox'
import Submit from './components/Submit'
import data from './data'

class App extends Component {
  constructor() {
    super()

    this.state = {
      score: 0,
      name: ''
    }
  }

  handleNewGameButton = () => {
    console.log('new game')
  }

  handleButtonClick = (e, answer) => {
    if (e.target.value === answer.toString()) {
      this.setState({
        score: this.state.score + 1
      })
      e.target.style.backgroundColor = 'green'
    } else {
      e.target.style.backgroundColor = 'red'
    }
  }

  submitScoreButton = (e, name) => {
    e.preventDefault()

    console.log(name + " submitted a score of " + this.state.score)
    console.log("Good job, you should play again!")
  }

  render () {
    return (
      <div>
        <Header score={this.state.score} handleNewGameButton={this.handleNewGameButton}/>
        <GameBox questions={data.questions} handleButtonClick={this.handleButtonClick}/>
        <Submit submitScoreButton={this.submitScoreButton}/>
      </div>
    )
  }
}

export default App;
