import Logo from './Logo/Logo'
import Search from './Search/Search'
import classes from './Header.module.scss'
import Profile from './Profile/Profile'

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Search />
      <Profile />
    </header>
  )
}
export default Header
