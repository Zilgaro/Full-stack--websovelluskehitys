import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

const Kurssi = (props) => {
  return (
    <div>
      <Otsikko kurssi={props.kurssi.nimi}/>
      <Sisalto osat={props.kurssi.osat} />
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}

const Sisalto = (props) => {
  const rivit = () => props.osat.map(osa => <Osa key={osa.id} osa={osa}/>)
  return (
    <div>
        {rivit()}
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osa.nimi} {props.osa.tehtavia}</p>
  )
}
/*
const Yhteensa = (props) => {
  return (
    <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia +
                                          props.osat[2].tehtavia} tehtävää</p>
  )
}
*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
