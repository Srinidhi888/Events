// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const initialPage = () => {
    return (
      <div className="bg">
        <p className="head">
          Click on an event, to view its registration details
        </p>
      </div>
    )
  }

  const yetPage = () => {
    return (
      <div className="bg-1">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p>
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form
        </p>
        <button className="btn">Register Here</button>
      </div>
    )
  }

  const registerPage = () => {
    return (
      <div className="bg-1">
        <img
          className="logo-ima"
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
        />
        <h1>You have already registered for the event</h1>
      </div>
    )
  }

  const closedPage = () => {
    return (
      <div className="bg-1">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
        />
        <h1>Registrations Are Closed Now!</h1>
        <p>Stay tuned. We will reopen the registrations soon!</p>
      </div>
    )
  }

  const renderPage = () => {
    switch (status) {
      case 'INITIAL':
        return initialPage()
      case 'YET_TO_REGISTER':
        return yetPage()
      case 'REGISTERED':
        return registerPage()
      case 'REGISTRATIONS_CLOSED':
        return closedPage()
      default:
        return null
    }
  }

  return <div> {renderPage()}</div>
}

export default ActiveEventRegistrationDetails
