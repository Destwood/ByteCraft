import classes from './Logout.module.scss'
import logoutIcon from './logout-icon.svg'
import { useActions } from '../../../../hooks/useActions'

const Logout = () => {
  const { logout } = useActions()

  return (
    <button onClick={logout} className={classes.logout}>
      <img src={logoutIcon} alt="Icon" />
    </button>
  )
}
export default Logout
