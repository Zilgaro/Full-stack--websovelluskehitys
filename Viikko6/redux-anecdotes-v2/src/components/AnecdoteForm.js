import React from 'react';
import { connect } from 'react-redux'
import { anecdoteCreation } from './../reducers/anecdoteReducer';
import { notificationCreator, resetNotification } from './../reducers/notificationReducer'

class AnecdoteForm extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    this.props.anecdoteCreation(content)
    this.props.notificationCreator('Created new anecdote', 5)
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
