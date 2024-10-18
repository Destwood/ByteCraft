import classes from './FormElements.module.scss'

const AuthField = ({ label, type, forId, register, error }) => {
  return (
    <div className={classes.field}>
      <div className={classes['field-top']}>
        <label htmlFor={forId}>{label}</label>
        <p className={classes.error}>{error}</p>
      </div>
      <input {...register} id={forId} type={type} />
    </div>
  )
}
export default AuthField
