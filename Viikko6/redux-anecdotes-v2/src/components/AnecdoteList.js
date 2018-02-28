import React from 'react';
import ConnectedFilter from './Filter'
import anecdoteService from './../services/anecdotes'
import { connect } from 'react-redux'
import { anecdoteVote} from './../reducers/anecdoteReducer';
import { notificationCreator, resetNotification } from './../reducers/notificationReducer'


class AnecdoteList extends React.Component {

  handleVoteClick = async (anecdote) => {
    await anecdoteService.updateVotes(anecdote)
    this.props.anecdoteVote(anecdote.id)
    this.props.notificationCreator(`You voted '${anecdote.content}''`)

    setTimeout(() => {
      this.props.resetNotification()
    },5000)
  }


  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <ConnectedFilter/>
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => this.handleVoteClick(anecdote)
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

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes.filter(a => a.content.toLowerCase().match(
    (filter.toLowerCase())))
}


const mapDispatchToProps = {
  anecdoteVote,
  notificationCreator,
  resetNotification
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList;
