import classes from './Auth.module.scss'

const AuthButton = ({ text }) => {
  return (
    <button className={classes.button} type="submit">
      {text}
    </button>
  )
}
export default AuthButton
