import React from 'react';
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addName = (event) => {
    event.preventDefault()
    const personObj = {
      name: this.state.newName
    }
    const persons = this.state.persons.concat(personObj)
    this.setState({
      persons,
      newName: ''
    })
  }

  handleNameChange = (event) => {
    this.setState({newName: event.target.value})
  }
  render() {
    const persons = () => this.state.persons.map(p =>
                          <Person key={p.name} name={p.name} />)

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit = {this.addName}>
          <div>
            nimi: <input value={this.state.newName}
                         onChange={this.handleNameChange}/>
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
