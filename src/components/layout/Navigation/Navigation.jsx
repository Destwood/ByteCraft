import { menu } from './menu.data'
import NavigationItem from './NavigationItem'
import classes from './Navigation.module.scss'
import { useEffect, useRef } from 'react'

import { useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()
  const indicatorRef = useRef()

  useEffect(() => {
    const currentPath = location.pathname
    const currentIndex = menu.findIndex(item => currentPath.includes(item.link))
    const defaultValue = currentIndex >= 0 ? currentIndex * 60 : 0

    indicatorRef.current.style.top = `${defaultValue}px`
  }, [location.pathname])

  const handleHover = index => {
    indicatorRef.current.style.top = `${index * 60}px`
  }

  const handleLeave = () => {
    const currentPath = location.pathname
    const currentIndex = menu.findIndex(item => currentPath.includes(item.link))
    const defaultValue = currentIndex >= 0 ? currentIndex * 60 : 0
    
    indicatorRef.current.style.top = `${defaultValue}px`
  }

  return (
    <div className={classes.box}>
      <div ref={indicatorRef} className={classes.indicator}></div>
      <nav className={classes.menu}>
        <ul className={classes.list}>
          {menu.map((item, idx) => (
            <NavigationItem
              key={`navigation item ${item.link}`}
              Icon={item.icon}
              link={item.link}
              title={item.title}
              handleHover={() => handleHover(idx)}
              handleLeave={handleLeave}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default Navigation
