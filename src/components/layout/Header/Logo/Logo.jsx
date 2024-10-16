import { Link } from 'react-router-dom'
import classes from './Logo.module.scss'

const Logo = () => {
  return (
    <Link to="/home" className={classes.logo}>
      united4ua
    </Link>
  )
}
export default Logo
