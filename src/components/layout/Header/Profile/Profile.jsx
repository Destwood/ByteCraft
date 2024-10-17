import classes from './Profile.module.scss'
import profileIcon from './profile-icon.svg'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <Link to={'/profile'} className={classes.profile}>
      <img src={profileIcon} alt="Icon" />
    </Link>
  )
}
export default Profile
