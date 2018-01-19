import React from 'react';
import Person from './components/Person'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentWillMount() {
  personService.getAll()
    .then(response => {
      console.log('promise fulfilled')
      this.setState({ persons: response.data })
    })
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
      personService.create(personObj)
        .then(response => {
          console.log(response)
        })
      const persons = this.state.persons.concat(personObj)
      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    } else {
      if (window.confirm(`${this.state.newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        const person = this.state.persons.find(p => p.name === this.state.newName)
        person.number = this.state.newNumber
        personService.update(person.id, person)
          .then(person => {
            const persons = this.state.persons.filter(p => p.id !== person.id)
            this.setState({
              notes: persons.concat(person)
            })
          })
          .catch(error => {
            alert(`henkilö '${person.name}' on jo valitettavasti poistettu palvelimelta`)
            this.setState({
              persons: this.state.persons.filter(p => p.id !== person.id)})
            })
          }
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

  deletePerson = (name) => {
    return () => {
      if (window.confirm(`poistetaanko ${name}`)) {
        const person = this.state.persons.find(p => p.name === name)
        const index = this.state.persons.indexOf(person)
        const array = this.state.persons
        //tää oli vaikenta mulle jostai syystä
        personService.remove(person.id)
        array.splice(index, 1)
        this.setState({persons: array})
      }
    }
  }


  render() {
    const persons = () => this.filterPersons().map(p =>
                          <Person key={p.name} name={p.name}
                          number={p.number} onClick={this.deletePerson.bind(this)}/>)

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
