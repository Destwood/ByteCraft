import classes from './Notifications.module.scss'
import profileIcon from './notifications-icon.svg'
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <Link to={'/notifications'} className={classes.notifications}>
      <img src={profileIcon} alt="Icon" />
    </Link>
  )
}
export default Notifications
