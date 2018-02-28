import React from 'react';

class AnecdoteForm extends React.Component {
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.props.onSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
    );
   }
}

export default AnecdoteForm;
