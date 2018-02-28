import React from 'react'
import ConnectedNotification from './components/Notification'
import ConnectedFilter from './components/Filter'
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import { anecdoteVote, anecdoteCreation } from './reducers/anecdoteReducer';
import { notificationCreator, resetNotification } from './reducers/notificationReducer'

class App extends React.Component {

  handleVoteClick = (id, content) => {
    this.props.store.dispatch(anecdoteVote(id))
    this.props.store.dispatch(
      notificationCreator(`You voted '${content}''`)
    )

    setTimeout(() => {
      this.props.store.dispatch(
        resetNotification()
      )
    },5000)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(
      anecdoteCreation(content)
    )
    this.props.store.dispatch(
      notificationCreator('Created new anecdote')
    )
    e.target.anecdote.value = ''

    setTimeout(() => {
      this.props.store.dispatch(
        resetNotification()
      )
    }, 5000)
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <ConnectedNotification />
        <ConnectedFilter/>
        <ConnectedAnecdoteList  />
        <ConnectedAnecdoteForm />
      </div>
    )
  }
}

export default App
