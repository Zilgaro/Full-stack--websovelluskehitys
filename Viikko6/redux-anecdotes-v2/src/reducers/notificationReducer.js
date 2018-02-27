const initialNotification = 'alkuarvo'

export const notificationCreator = notification => ({
    type: 'CREATE_NOTIFICATION',
    notification
})

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'CREATE_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export default notificationReducer;
