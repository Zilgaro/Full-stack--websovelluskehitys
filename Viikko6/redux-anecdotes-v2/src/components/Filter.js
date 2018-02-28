import React from 'react'
import { connect } from 'react-redux'
import { filterAction } from './../reducers/filterReducer'


class Filter extends React.Component {
  handleChange = (event) => {
    this.props.filterAction(event.target.value)
    // input-kentän arvo muuttujassa event.target.value
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  filterAction
}

const ConnectedFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter
