const Notification = ({ message,color}) => {
    console.log('notification',color)
    const notificationStyle = {
      color: `${color}`,
      height: '50px',
      borderRadius: '15px',
      background: 'lightgrey',
      fontStyle: 'italic',
      fontSize: '20px',
      border:  `solid 2px ${color}`,
      margin: 10,
      padding: 20
    }
    console.log(message)
    if (message === null) {
      return null
    }
    return (
      <div style={notificationStyle}>
        {message}
      </div>
    )
  }
  export default Notification