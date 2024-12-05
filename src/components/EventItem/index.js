// Write your code here
import './index.css'

const EventItem = props => {
  const {details, onRegister, isClick} = props
  const {imageUrl, id, name, location} = details

  const onImage = () => {
    onRegister(id)
  }

  const classProp = isClick ? 'spcl' : ''

  return (
    <li>
      <button className="ima-btn" onClick={onImage}>
        <img className={`ima ${classProp}`} src={imageUrl} alt="event" />
      </button>

      <p className="head-name">{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
