import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto o1={osa1} t1={tehtavia1} o2={osa2} t2={tehtavia2}
                                        o3={osa3} t3={tehtavia3}/>
      <Yhteensa t1={tehtavia1} t2={tehtavia2} t3={tehtavia3}/>
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
      <Osa osa={props.o1} teht={props.t1}/>
      <Osa osa={props.o2} teht={props.t2}/>
      <Osa osa={props.o3} teht={props.t3}/>
    </div>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osa} {props.teht}</p>
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
