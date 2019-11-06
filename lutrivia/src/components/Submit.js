import React, {Component} from 'react'

class Submit extends Component {
    constructor () {
        super()

        this.state = {
            input: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.submitScoreButton(e, this.state.input)}>
                    <input onChange={this.changeHandler} type='text' value={this.state.input} placeholder='Name' />
                    <button>Submit Score</button>
                </form>
            </div>
        )
    }
}

export default Submit