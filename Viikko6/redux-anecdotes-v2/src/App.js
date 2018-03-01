import React from 'react'
import ConnectedNotification from './components/Notification'
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import { connect } from 'react-redux'
import { anecdoteInitialization } from './reducers/anecdoteReducer'

class App extends React.Component {
  componentDidMount () {
    this.props.anecdoteInitialization()
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <ConnectedNotification />
        <ConnectedAnecdoteList  />
        <ConnectedAnecdoteForm />
      </div>
    )
  }
}

export default connect(
  null,
  { anecdoteInitialization }
)(App)
