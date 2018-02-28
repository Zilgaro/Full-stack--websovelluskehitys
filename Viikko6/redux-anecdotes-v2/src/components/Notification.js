import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }

    const { notifications } = this.props
    console.log(notifications)
    if (notifications!=='') {
      return (
        <div style={style}>
          {notifications}
        </div>
      )
    } else {
      return (<div></div>)
    }

  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const ConnectedNotification = connect(
  mapStateToProps
)(Notification)

export default ConnectedNotification
