import Logo from './Logo/Logo'
import Search from './Search/Search'
import classes from './Header.module.scss'
import Profile from './Profile/Profile'
import Notifications from './Notifications/Notifications'
import Logout from './Logout/Logout'
import { useAuth } from '../../../hooks/useAuth'

const Header = () => {
  const isAuth = !!useAuth()

  return (
    <header className={classes.header}>
      <Logo />
      <Search />

      <div className={classes.actions}>
        {isAuth && <Logout />}

        <Notifications />
        <Profile />
      </div>
    </header>
  )
}
export default Header
