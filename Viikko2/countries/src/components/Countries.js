import React from 'react'

const Countries = (props) => {
  if (props.countries.length > 10) {
    return (
      <div>
        too many matches, specify another filter
      </div>
    )
  }

  let showAll = false;
  props.countries.length === 1 ? showAll = true :  showAll = false
  const countries = () => props.countries.map(p => <Country key={p.name}
                                               country={p} showAll={showAll} />)
  return (
    <div>
      {countries()}
    </div>
  )
}

const Country = (props) => {
  return (
    props.showAll ?
    <div>
      <h1>{props.country.name} {props.country.nativeName}</h1>
      <p>capital: {props.country.capital}</p>
      <p>population: {props.country.population}</p>
      <img src={props.country.flag} alt='flag' height="200" width="400"/>
      </div> :
      <p>{props.country.name}</p>
    )
  }
export default Countries
