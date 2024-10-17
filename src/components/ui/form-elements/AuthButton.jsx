import classes from './FormElements.module.scss'

const AuthButton = ({ text }) => {
  return (
    <button className={classes.button} type="submit">
      {text}
    </button>
  )
}
export default AuthButton
