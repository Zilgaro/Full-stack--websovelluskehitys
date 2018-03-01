import anecdoteService from './../services/anecdotes'

export const anecdoteCreation = (data) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

export const anecdoteVote = (data) => {
  return async (dispatch) => {
    await anecdoteService.updateVotes(data)
    dispatch({
      type: 'VOTE',
      id: data.id
    })
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const old = state.filter(a => a.id !== action.id)
      const voted = state.find(a => a.id === action.id)
      return [...old, { ...voted, votes: voted.votes + 1 }]
    case 'CREATE':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default:
      return state;
  }
}

export default anecdoteReducer;
