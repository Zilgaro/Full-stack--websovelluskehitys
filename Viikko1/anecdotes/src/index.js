import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      values: this.props.anecdotes.map(p=>0)
    }
  }

  generateInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  nextAnecdote = (max) => {
    return () => {
      this.setState({selected: this.generateInt(max)})
    }
  }

  vote = (index) => {
    return () => {
      let newValues = this.state.values.slice()
      newValues[index] = newValues[index] + 1
      this.setState({values: newValues})
    }
  }

  render() {
    const Votetally = () => {

        return ( this.state.values[this.state.selected] === 0 ? <p></p>: 
          <p>has {this.state.values[this.state.selected]} votes</p>
        )
    }

    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <Votetally/>
        <button onClick={this.vote(this.state.selected)}>vote</button>
        <button onClick={this.nextAnecdote(anecdotes.length)}>next anecdote</button>
      </div>
    )
  }
}

const anecdotes = [
'If it hurts, do it more often',
'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
'Premature optimization is the root of all evil.',
'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
