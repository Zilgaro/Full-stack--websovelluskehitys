import React from 'react'

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

export default Kurssi
