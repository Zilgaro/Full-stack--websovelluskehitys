import React from 'react';
import { connect } from 'react-redux'
import { anecdoteVote} from './../reducers/anecdoteReducer';
import { notificationCreator, resetNotification } from './../reducers/notificationReducer'


class AnecdoteList extends React.Component {

  handleVoteClick = (id, content) => {
    this.props.anecdoteVote(id)
    this.props.notificationCreator(`You voted '${content}''`)

    setTimeout(() => {
      this.props.
        resetNotification()
    },5000)
  }


  render() {
    const { anecdotes, filter } = this.props
    const anecdotesToShow = anecdotes
      .filter(a => a.content.toLowerCase().match(
        (filter.toLowerCase())))

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.handleVoteClick(
                anecdote.id, anecdote.content)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
};

const mapDispatchToProps = {
  anecdoteVote,
  notificationCreator,
  resetNotification
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList;
