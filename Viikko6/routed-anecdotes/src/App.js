import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { ListGroup, ListGroupItem, Grid, Row, Col, Thumbnail, Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const linkActiveStyle = {
  fontWeight: 'bold',
  color: 'orange',
  padding: '5px'
}

const Menu = () => (
    <Navbar>    
      <Navbar.Header>
        <Navbar.Brand>
          Anekdoottihommeli
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to='/' activeStyle={linkActiveStyle} >
          <NavItem >
            Anecdotes
          </NavItem>
        </LinkContainer>
        <LinkContainer exact to='/create' activeStyle={linkActiveStyle}>  
          <NavItem>
          Create New
          </NavItem >
        </LinkContainer>
        <LinkContainer exact to='/about' activeStyle={linkActiveStyle}>
          <NavItem>
            About
          </NavItem >
        </LinkContainer>
      </Nav>
    </Navbar>
)

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ListGroup>
      {anecdotes.map(anecdote => <ListGroupItem key={anecdote.id} >
        <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </ListGroupItem>)}
    </ListGroup>  
  </div>
)

const Anecdote = ({ anecdote }) => (
  <div>
    <h2>{`${anecdote.content} by ${anecdote.author}`}</h2>
    <p>{`has ${anecdote.votes} votes`}</p>
    <p>for more info see <a href={anecdote.info}>{anecdote.info}</a></p>
  </div>
)

const notificationStyle = {
  border: '2px solid #73AD21',
  color: 'green',
  borderRadius: '25px',
  padding: '10px'
}

const Notification = ({ notification }) => (
    <div style={notification === '' ? null : notificationStyle}>{notification}</div>
)

const About = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>
      <h2>About anecdote app</h2>
      <p>According to Wikipedia:</p>
    
      <em>An anecdote is a brief, revealing account of an individual person or an incident. 
        Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself, 
        such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative. 
        An anecdote is "a story with a point."</em>

        <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
      </Col>
      <Col xs={3} md={3}>
        <Thumbnail src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1024px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg' />
      </Col>
    </Row>
  </Grid>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code. 
  </div>
)

class CreateNew extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            content 
            <input name='content' value={this.state.content} onChange={this.handleChange} />
          </div>
          <div>
            author
            <input name='author' value={this.state.author} onChange={this.handleChange} />
          </div>
          <div>
            url for more info
            <input name='info' value={this.state.info} onChange={this.handleChange} />
          </div> 
          <button>create</button>
        </form>
      </div>  
    )

  }
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: ''
    } 
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({ 
      anecdotes: this.state.anecdotes.concat(anecdote),
      notification: `a new anecdote ${anecdote.content} created!`  
    })
    
    setTimeout(() => this.setState({ notification: '' }), 10000)
  
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => a.id === id)

  vote = (id) => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    return (
      <div>
        <h1>Software anecdotes</h1>
          <Router>
            <div>
              <Menu />
              <Notification notification={this.state.notification} />
              <Route exact path='/' render={() => <AnecdoteList anecdotes={this.state.anecdotes} />} />
              <Route path='/about' render={() => <About />} />      
              <Route path='/create' render={({history}) => <CreateNew history={history} addNew={this.addNew}/>} />
              <Route exact path='/anecdotes/:id' render={({match}) => 
                <Anecdote anecdote={this.anecdoteById(match.params.id)} />
              } />
            </div>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
