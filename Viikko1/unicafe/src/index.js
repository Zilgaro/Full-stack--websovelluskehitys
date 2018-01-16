import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      bad: 0,
      neutral: 0
    }
  }

  clickGood = () => {
    this.setState({
      good: this.state.good + 1
    })
  }

  clickNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1
    })
  }

  clickBad = () => {
    this.setState({
      bad: this.state.bad + 1
    })
  }

  render() {


    return (
        <div>
          <h1>anna palautetta</h1>
          <button onClick={this.clickGood}>hyvä
          </button>

          <button onClick={this.clickNeutral}>neutraali
          </button>

          <button onClick={this.clickBad}>huono
          </button>

          <h1>statistiikka</h1>
          <p>hyvä: {this.state.good}</p>
          <p>neutraali: {this.state.neutral}</p>
          <p>huono: {this.state.bad}</p>
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
