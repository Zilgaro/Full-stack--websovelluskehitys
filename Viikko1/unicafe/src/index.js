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

  calculateAverage = (good, neutral, bad) => {
    return ((good + bad * -1) / (good+neutral+bad))
  }

  calcFracOfPositive = (good, neutral, bad) => {
    return ((good / (good+neutral+bad)) * 100) + "%"
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
        this.checkIfAllZero(good,neutral,bad) ?
        <div>yhtään palautetta ei ole annettu</div> :
        <div>
          <Statistic text="hyvä" value={good}/>
          <Statistic text="neutraali" value={neutral}/>
          <Statistic text="huono" value={bad}/>
          <Statistic text="keskiarvo" value=
          {this.calculateAverage(good,neutral,bad)}
          />
          <Statistic text="positiivisia" value=
          {this.calcFracOfPositive(good,neutral,bad)}
          />
        </div>
      )
    }

    const Statistic = ({text, value}) => {
      return(
        <p>{text}: {value}</p>
      )
    }

    const Button = ({text, handleClick}) => {
      return(
        <button onClick={handleClick}>{text}</button>
      )
    }

    return (
        <div>
          <h1>anna palautetta</h1>
          <Button text="hyvä" handleClick={this.clickGood} />
          <Button text="neutraali" handleClick={this.clickNeutral} />
          <Button text="huono" handleClick={this.clickBad} />

          <h1>statistiikka</h1>
          <Statistics />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
