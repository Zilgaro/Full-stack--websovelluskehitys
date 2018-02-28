import React from 'react';
import { connect } from 'react-redux'
import anecdoteService from './../services/anecdotes'
import { anecdoteCreation } from './../reducers/anecdoteReducer';
import { notificationCreator, resetNotification } from './../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.anecdoteCreation(newAnecdote)
    this.props.notificationCreator('Created new anecdote')

    setTimeout(() => {
      this.props.resetNotification()
    }, 5000)
  }

   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    );
   }
}

const mapDispatchToProps = {
  anecdoteCreation,
  notificationCreator,
  resetNotification
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm;
