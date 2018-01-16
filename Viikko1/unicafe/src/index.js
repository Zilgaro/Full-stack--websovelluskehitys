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

  clickButton = (value, id) => {
    return () => {
      if (id === "good") {
        this.setState({good: value})
      }

      if (id === "neutral") {
        this.setState({neutral: value})
      }

      if (id === "bad") {
        this.setState({bad: value})
      }
    }
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
        <table>
          <tbody>
          <tr>
            <Statistic text="hyvä" value={good}/>
          </tr>
          <tr>
            <Statistic text="neutraali" value={neutral}/>
          </tr>
          <tr>
            <Statistic text="huono" value={bad}/>
          </tr>
          <tr>
            <Statistic text="keskiarvo" value=
            {this.calculateAverage(good,neutral,bad)}
            />
          </tr>
          <tr>
            <Statistic text="positiivisia" value=
            {this.calcFracOfPositive(good,neutral,bad)}
            />
          </tr>
          </tbody>
      </table>
      )
    }

    const Statistic = ({text, value}) => {
      return(
        <td>{text}: {value}</td>
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
          <Button text="hyvä" handleClick
          ={this.clickButton(good + 1, "good")} />
          <Button text="neutraali" handleClick
          ={this.clickButton(neutral + 1, "neutral")} />
          <Button text="huono" handleClick
          ={this.clickButton(bad + 1, "bad")} />

          <h1>statistiikka</h1>
          <Statistics />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
