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

  /*toivottavasti voitan 'kaikkien aikojen vaikeimmin tehdyn ekan viikon
  tehtävän' palkinnon :D
  */
  calculateAverage = (good, neutral, bad) => {
    return (this.checkIfAllZero(good, neutral, bad)
    ? 0 : (good + bad * -1) / (good+neutral+bad))
  }

  calcFracOfPositive = (good, neutral, bad) => {
    return (this.checkIfAllZero(good, neutral, bad)
    ? 0 : good / (good+neutral+bad)) * 100
  }

  checkIfAllZero = (good, neutral, bad) => {
    if (good === 0 && bad === 0 && neutral === 0) {
      return true
    }
    return false;
  }


  render() {
    const {good, neutral, bad} = this.state
    const Statistics = () => {
      return (
        <div>
          <p>hyvä: {good}</p>
          <p>neutraali: {neutral}</p>
          <p>huono: {bad}</p>
          <p>keskiarvo: {this.calculateAverage(good,neutral,bad)}</p>
          <p>positiivisia: {this.calcFracOfPositive(good,neutral,bad)}%</p>
        </div>
      )
    }

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
          <Statistics />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
