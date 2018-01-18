import React from 'react';
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  checkIfNameTaken = (arr, name) => {
    return arr.some((arrVal) => {
      return arrVal.name === name
    })
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    if (!this.checkIfNameTaken(this.state.persons, this.state.newName)) {
      const persons = this.state.persons.concat(personObj)
      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    } else {
      alert("Name already taken!")
    }
  }

  handleNameChange = (event) => {
    this.setState({newName: event.target.value})
  }
  handleNumberChange = (event) => {
    this.setState({newNumber: event.target.value})
  }
  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
  }

  filterPersons = () => {
    return (
      this.state.persons.filter(p => p.name.toLowerCase()
                        .startsWith(this.state.filter.toLowerCase()))
    )
  }


  render() {
    const persons = () => this.filterPersons().map(p =>
                          <Person key={p.name} name={p.name}
                          number={p.number} />)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div> rajaa näytettäviä: <input value={this.state.filter}
                                        onChange={this.handleFilterChange} />

        </div>
        <form onSubmit = {this.addPerson}>
          <div>
            nimi: <input value={this.state.newName}
                         onChange={this.handleNameChange}/>
          </div>
          <div>
            numero: <input value={this.state.newNumber}
                          onChange={this.handleNumberChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
          {persons()}
      </div>
    )
  }
}

export default App
