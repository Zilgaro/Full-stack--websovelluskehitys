import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
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
  
  handleVoteSubmit = (e) => {
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
        <Notification store={this.props.store}/>
        <AnecdoteList store={this.props.store} handleClick={this.handleVoteClick} />
        <AnecdoteForm store={this.props.store} onSubmit={this.handleVoteSubmit} />
      </div>
    )
  }
}

export default App