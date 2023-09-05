export const withAuthentication = (Component) => {
    const isConnected = false
  
    if (!isConnected) {
      return <p>You don't have access !</p>
    }
  
    return (props) => <Component {...props} />
  }
  