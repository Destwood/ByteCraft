import Header from './Header/Header'
import classes from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={classes.content}>
        <Navigation />
        <div className={classes.page}>{children}</div>
      </div>
    </div>
  )
}
export default Layout
