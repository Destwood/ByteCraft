import Logo from './Logo/Logo'
import Search from './Search/Search'
import classes from './Header.module.scss'
import Profile from './Profile/Profile'
import Notifications from './Notifications/Notifications'

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Search />
      <div className={classes.actions}>
        <Notifications />
        <Profile />
      </div>
    </header>
  )
}
export default Header
