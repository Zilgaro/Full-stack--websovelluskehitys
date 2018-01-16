import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto o1={osa1} o2={osa2} o3={osa3} />
      <Yhteensa t1={osa1.tehtavia} t2={osa2.tehtavia} t3={osa3.tehtavia}/>
    </div>
  )
}

const Otsikko = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa osa={props.o1}/>
      <Osa osa={props.o2}/>
      <Osa osa={props.o3}/>
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osa.nimi} {props.osa.tehtavia}</p>
  )
}

const Yhteensa = (props) => {
  return (
    <p>yhteensä {props.t1 + props.t2 + props.t3} tehtävää</p>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
