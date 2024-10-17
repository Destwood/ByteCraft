import { Link, useLocation } from 'react-router-dom'
import * as MaterialIcons from 'react-icons/md'
import classes from './Navigation.module.scss'

const NavigationItem = ({ link, title, Icon, handleHover, handleLeave }) => {
  const location = useLocation()
  const IconComponent = MaterialIcons[Icon]

  return (
    <li
      className={classes.item}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Link to={link}>
        <IconComponent
          color={location.pathname.includes(link) ? '#fff' : '#292932'}
        />
        <p>{title}</p>
      </Link>
    </li>
  )
}
export default NavigationItem
