const initialNotification = null

export const notificationCreator = notification => ({
    type: 'CREATE_NOTIFICATION',
    notification
})

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
