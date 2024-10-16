import { Link } from 'react-router-dom'
import * as MaterialIcons from 'react-icons/md'
import classes from './Navigation.module.scss'

const NavigationItem = ({ link, title, Icon, handleHover, handleLeave }) => {
  const IconComponent = MaterialIcons[Icon]

  return (
    <li
      className={classes.item}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link to={link}>
        <IconComponent />
        <p>{title}</p>
      </Link>
    </li>
  )
}
export default NavigationItem
