import React from 'react';
import axios from 'axios'
import Countries from './components/Countries'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
  }

  filterCountries = () => {
    return (
      this.state.countries.filter(p => p.name
                    .toLowerCase().includes(this.state.filter.toLowerCase()))
    )
  }

  handleCountryClick = (country) => {
    console.log(country)
    this.setState({filter: country.name})
  }

  render() {
    return (
      <div>
        find countries: <input value={this.state.filter}
        onChange={this.handleFilterChange} />
       {/*Tää menee nii usean mutkan kautta että heikompaa hirvittää!*/}
        <Countries countries={this.filterCountries()}
                   onClick={this.handleCountryClick.bind(this)}/>
      </div>
    )
  }
}

export default App;
