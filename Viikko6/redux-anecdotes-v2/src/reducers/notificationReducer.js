const initialNotification = ''

export const notificationCreator = (notification, timeout) => {
  return async (dispatch) => {
    dispatch ({
      type: 'CREATE_NOTIFICATION',
      notification
    })
    setTimeout(() => {
      dispatch ({
        type: 'RESET_NOTIFICATION'
      })
    }, timeout * 1000)
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_NOTIFICATION'
  }
}

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'CREATE_NOTIFICATION':
      return action.notification
    case 'RESET_NOTIFICATION':
      return initialNotification
    default:
      return state
  }
}

export default notificationReducer;
