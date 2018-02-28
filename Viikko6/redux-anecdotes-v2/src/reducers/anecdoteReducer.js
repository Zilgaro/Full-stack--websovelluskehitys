export const anecdoteCreation = content => ({
  type: 'CREATE',
  content,
});

export const anecdoteVote = id => ({
  type: 'VOTE',
  id,
});

export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT',
    data
  }
}

const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const old = state.filter(a => a.id !== action.id)
      const voted = state.find(a => a.id === action.id)
      return [...old, { ...voted, votes: voted.votes + 1 }]
    case 'CREATE':
      return [...state, { content: action.content, id: getId(), votes: 0 }]
    case 'INIT':
      return action.data
    default:
      return state;
  }
};

export default anecdoteReducer;
