import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]
  const kaikkiKurssit = () =>
        kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)
  return (
    <div>
      <h1>Opetusohjelma</h1>
      {kaikkiKurssit()}
    </div>
  )
}

const Kurssi = (props) => {
  return (
    <div>
      <Otsikko kurssi={props.kurssi.nimi}/>
      <Sisalto osat={props.kurssi.osat} />
      <Yhteensa osat={props.kurssi.osat}/>
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

const Yhteensa = (props) => {
  //funktionaalisuus on helppoa ja hauskaa
  const yhteensa = props.osat.reduce((prevVal, osa) => {
    return prevVal + osa.tehtavia
  }, 0)

  return (
    <p>yhteensä {yhteensa} tehtävää</p>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
