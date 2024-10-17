import classes from './FormElements.module.scss'

const AuthTitle = ({ title }) => {
  return <h2 className={classes.title}>{title}</h2>
}
export default AuthTitle
