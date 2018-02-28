import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(url, {content, votes: 0,})
  return response.data
}

const updateVotes = async (anecdote) => {
  const response = await axios.put(`${url}/${anecdote.id}`,
    {...anecdote, votes: anecdote.votes + 1})
  return response
}

export default { getAll, createNew, updateVotes }
